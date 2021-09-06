import { Akash } from "../akash/akash";
import { getCrypto } from "pkijs/src/common";
import { stringToArrayBuffer } from "pvutils";
import yaml, { DEFAULT_SCHEMA } from "js-yaml";
import { GroupSpec } from "../codec/akash/deployment/v1beta1/group";
import { Attribute } from "../codec/akash/base/v1beta1/attribute";
import { Endpoint, Endpoint_Kind } from "../codec/akash/base/v1beta1/endpoint";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { findAttribute, parseRawLog } from "@cosmjs/stargate/build/logs";

// Some golang structs are slightly different from the shapes defined
// under src/codec/akash, and we need to define the analogous golang structs to
// derive the same manifest version (sdl hash).
export type Manifest = Group[];

export interface Group {
  Name: string;
  Services: Service[];
}

export interface Service {
  Name: string;
  Image: string;
  Command: string[] | null;
  Args: string[] | null;
  Env: string[] | null;
  Resources: ResourceUnits
  Count: number;
  Expose: ServiceExpose[] | null
}

export interface ServiceExpose {
  Port: number; // Port on the container
  ExternalPort?: number; // Port on the service definition (default 0?)
  Proto: ServiceProtocol // 
  Service: string; // default ""
  Global: boolean; // default false
  Hosts: string[] | null;
}

export type ServiceProtocol = "TCP" | "UDP";

export interface ResourceUnits {
  cpu: CPU;
  memory: Memory;
  storage: Storage;
  endpoints: Endpoint[] | null;
}

export interface CPU {
  units: ResourceValue;
  attributes?: Attribute[];
}

export interface Memory {
  size: ResourceValue;
  attributes?: Attribute[];
}

export interface Storage {
  size: ResourceValue;
  attributes?: Attribute[];
}

export interface ResourceValue {
  val: string; // int string
}

export interface SDLSpec {
  version: "2.0"; // only version 2.0 supported by Akash at the moment
  services: {
    [key: string]: { // Service Name
      image: Service["Image"];
      depends_on?: Service["Name"][];
      command?: Service["Command"];
      args?: Service["Args"];
      env?: Service["Env"];
      expose: {
        port: ServiceExpose["Port"];
        as?: ServiceExpose["ExternalPort"];
        accept?: ServiceExpose["Hosts"];
        proto?: "http" | "https" | "tcp";
        to?: {
          service?: ServiceExpose["Service"];
          global?: ServiceExpose["Global"];
        }[]
      }[]
    }
  };
  profiles: {
    compute: {
      [key: string]: { // Profile Name
        resources: {
          cpu: {
            units: number | string,
          }
          memory: {
            size: string
          }
          storage: {
            size: string
          }
        }
      }
    }
    placement: {
      [key: string]: { // Group Name
        attributes?: Record<Attribute["key"], Attribute["value"]>;
        signedBy?: {
          allOf?: string[],
          anyOf?: string[]
        }
        pricing: {
          [key: string]: { // Profile Name
            denom: string,
            amount: number
          }
        }
      }
    }
  };
  deployment: {
    [key: string]: { // Service Name
      [key: string]: { // Group Name
        profile: string // Profile Name
        count: Service["Count"]
      }
    }
  };
}

export class SDL {
  public readonly data: SDLSpec;
  public readonly manifest: Manifest;
  public readonly groups: GroupSpec[];

  constructor(sdlString: string) {
    this.data = yaml.load(sdlString, { schema: DEFAULT_SCHEMA }) as SDLSpec;

    // Maps services to group
    const groupServices: { [key: string]: string[] } = {};
    Object.keys(this.data.deployment).forEach((serviceName) => {
      Object.keys(this.data.deployment[serviceName]).forEach((groupName) => {
        if (groupServices[groupName]) {
          groupServices[groupName].push(serviceName);
        } else {
          groupServices[groupName] = [serviceName];
        }
      });
    });
    // golang version yaml unmarshalling result in sorted keys it seems.
    // Do the same by processing services in sorted order to achieve the same manifest version hash.
    Object.entries(groupServices).forEach(([groupName, serviceNames]) => {
      groupServices[groupName] = serviceNames.sort();
    });

    this.groups = [];
    Object.entries(groupServices).forEach(([groupName, serviceNames]) => {
      const groupAttributes = this.data.profiles.placement[groupName].attributes || {};
      const groupSignedBy = this.data.profiles.placement[groupName].signedBy;
      this.groups.push({
        name: groupName,
        requirements: {
          attributes: Object.entries(groupAttributes).map(([key, value]) => {
            return { key: key, value: value };
          }),
          signedBy: groupSignedBy ? {
            allOf: groupSignedBy.allOf || [],
            anyOf: groupSignedBy.anyOf || [],
          } : undefined
        },
        resources: serviceNames.map((serviceName) => {
          const profileName = this.data.deployment[serviceName][groupName].profile;
          const serviceComputeResources = this.data.profiles.compute[profileName].resources;
          const normalizedCPUUnit = this.normalizeCPUUnit(serviceComputeResources.cpu.units.toString());
          const normalizedMemoryUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.memory.size);
          const normalizedStorageUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.storage.size);

          const endpoints: Endpoint[] = [];
          this.data.services[serviceName].expose.forEach((expose) => {
            const proto = expose.proto || "tcp"; // default tcp
            const isTCP = proto === "http" || proto === "https" || proto === "tcp";
            const externalPortExpose = expose.as || expose.port;
            if (expose.to) {
              expose.to.forEach((to) => {
                if (to.global) {
                  let kind = Endpoint_Kind.RANDOM_PORT;
                  const shouldBeIngress = isTCP && externalPortExpose === 80;
                  if (shouldBeIngress) {
                    kind = Endpoint_Kind.SHARED_HTTP;
                  }
                  endpoints.push({ kind: kind });
                }
              });
            }
          });

          return {
            count: this.data.deployment[serviceName][groupName].count,
            price: {
              denom: this.data.profiles.placement[groupName].pricing[profileName].denom,
              amount: this.data.profiles.placement[groupName].pricing[profileName].amount.toString()
            },
            resources: {
              cpu: {
                units: {
                  val: new Uint8Array(stringToArrayBuffer(normalizedCPUUnit))
                },
                attributes: []
              },
              memory: {
                quantity: {
                  val: new Uint8Array(stringToArrayBuffer(normalizedMemoryUnit))
                },
                attributes: []
              },
              storage: {
                quantity: {
                  val: new Uint8Array(stringToArrayBuffer(normalizedStorageUnit))
                },
                attributes: []
              },
              endpoints: endpoints
            }
          };
        })
      });
    });

    this.manifest = [];
    Object.entries(groupServices).forEach(([groupName, serviceNames]) => {
      this.manifest.push({
        Name: groupName,
        Services: serviceNames.map((serviceName) => {
          const profileName = this.data.deployment[serviceName][groupName].profile;
          const serviceComputeResources = this.data.profiles.compute[profileName].resources;
          const normalizedCPUUnit = this.normalizeCPUUnit(serviceComputeResources.cpu.units.toString());
          const normalizedMemoryUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.memory.size);
          const normalizedStorageUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.storage.size);

          const serviceExpose = this.data.services[serviceName].expose;
          const flattenedExpose: ServiceExpose[] = [];
          serviceExpose.forEach((expose) => {
            if (expose.to) {
              expose.to.forEach((to) => {
                flattenedExpose.push({
                  Port: expose.port,
                  ExternalPort: expose.as || 0,
                  Proto: "TCP", // Looks like right now it's always TCP (http for 80, https for 443, tcp all others)
                  Service: to.service || "",
                  Global: to.global || false,
                  Hosts: expose.accept || null
                });
              });
            } else {
              flattenedExpose.push({
                Port: expose.port,
                ExternalPort: expose.as || 0,
                Proto: "TCP", // Looks like right now it's always TCP (http for 80, https for 443, tcp all others)
                Service: "",
                Global: false,
                Hosts: expose.accept || null
              })
            }
          })

          const service = this.data.services[serviceName];
          return {
            Name: serviceName,
            Image: service.image,
            Command: service.command || null,
            Args: service.args || null,
            Env: service.env || null,
            Resources: {
              cpu: {
                units: {
                  val: normalizedCPUUnit
                }
              },
              memory: {
                size: {
                  val: normalizedMemoryUnit
                }
              },
              storage: {
                size: {
                  val: normalizedStorageUnit
                }
              },
              endpoints: null
            },
            Count: this.data.deployment[serviceName][groupName].count,
            Expose: flattenedExpose.length > 0 ? flattenedExpose : null
          };
        })
      });
    });
  }

  public async manifestVersion(): Promise<ArrayBuffer> {
    // Computes deterministic hash
    const crypto = getCrypto() as SubtleCrypto;
    const sortedJSONString = JSON.stringify(this.sortJSON(this.manifest));
    const sortedJSONArraryBuffer = stringToArrayBuffer(sortedJSONString);
    return crypto.digest("SHA-256", sortedJSONArraryBuffer);
  }

  private sortJSON(obj: any): any {
    if (Array.isArray(obj)) {
      // golang version doesn't sort on arrays it seems
      return obj.map(e => this.sortJSON(e));
    }
    if (obj && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj).map(
          ([k, v]) => [k, this.sortJSON(v)]
        ).sort()
      );
    }
    return obj;
  }

  private normalizeCPUUnit(unit: string): string {
    // Normalizes a user given CPU unit string to number of milli-CPUs shares. E.g.:
    // "1" vCPU -> "1000" milli-CPUs
    // "0.5" -> "500"
    // "100m" (= 1/1000 * 100 = 0.1 vCPUs) -> "100" milli-CPUs
    // "50m" -> "50"
    let lhs = parseFloat(unit);
    const rhs = unit[unit.length - 1];
    if (rhs !== "m") {
      lhs *= 1000
    }
    return lhs.toString();
  }
  
  private normalizeMemoryStorageUnit(unit: string): string {
    // Normalizes a user given memory or storage unit string to number of bytes. E.g.:
    // "512Mi" -> "536870912" (512 * 1024^2)
    // See https://docs.akash.network/sdl#profiles-compute table
    const suffixValueMap: { [key: string]: number } = {
      k: 1000,
      Ki: 1024,
      M: 1000**2,
      Mi: 1024**2,
      G: 1000**3,
      Gi: 1024**3,
      T: 1000**4,
      Ti: 1024**4,
      P: 1000**5,
      Pi: 1024**5,
      E: 1000**6,
      Ei: 1024**6
    };
    const lhs = parseFloat(unit);
    const rhs = unit.replace(lhs.toString(), "");
    const multiplier = suffixValueMap[rhs] || 1;
    return (lhs * multiplier).toString();
  }
}

export async function currentBlockHeight(akash: Akash): Promise<number> {
  const response = await akash.tmClient.status();
  return response.syncInfo.latestBlockHeight;
}

export function findDeploymentSequence(deployCreateResponse: BroadcastTxResponse): { dseq: number, oseq: number, gseq: number } {
  const logs = parseRawLog(deployCreateResponse.rawLog);
  const eventType = "akash.v1";
  return {
    dseq: Number(findAttribute(logs, eventType, "dseq").value),
    gseq: Number(findAttribute(logs, eventType, "gseq").value),
    oseq: Number(findAttribute(logs, eventType, "oseq").value)
  };
}