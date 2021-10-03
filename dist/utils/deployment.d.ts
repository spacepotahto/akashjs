import { Akash } from "../akash/akash";
import { GroupSpec } from "../codec/akash/deployment/v1beta1/group";
import { Attribute } from "../codec/akash/base/v1beta1/attribute";
import { Endpoint } from "../codec/akash/base/v1beta1/endpoint";
import { BroadcastTxResponse } from "@cosmjs/stargate";
export declare type Manifest = Group[];
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
    Resources: ResourceUnits;
    Count: number;
    Expose: ServiceExpose[] | null;
}
export interface ServiceExpose {
    Port: number;
    ExternalPort?: number;
    Proto: ServiceProtocol;
    Service: string;
    Global: boolean;
    Hosts: string[] | null;
    HTTPOptions: ServiceExposeHTTPOptions;
}
export declare type ServiceProtocol = "TCP" | "UDP";
export interface ServiceExposeHTTPOptions {
    MaxBodySize: number;
    ReadTimeout: number;
    SendTimeout: number;
    NextTries: number;
    NextTimeout: number;
    NextCases: ("error" | "timeout" | "403" | "404" | "429" | "500" | "502" | "503" | "504" | "off")[];
}
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
    val: string;
}
export interface SDLSpec {
    version: "2.0";
    services: {
        [key: string]: {
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
                }[];
                http_options?: {
                    max_body_size?: ServiceExpose["HTTPOptions"]["MaxBodySize"];
                    read_timeout?: ServiceExpose["HTTPOptions"]["ReadTimeout"];
                    send_timeout?: ServiceExpose["HTTPOptions"]["SendTimeout"];
                    next_tries?: ServiceExpose["HTTPOptions"]["NextTries"];
                    next_timeout?: ServiceExpose["HTTPOptions"]["NextTimeout"];
                    next_cases?: ServiceExpose["HTTPOptions"]["NextCases"];
                };
            }[];
        };
    };
    profiles: {
        compute: {
            [key: string]: {
                resources: {
                    cpu: {
                        units: number | string;
                    };
                    memory: {
                        size: string;
                    };
                    storage: {
                        size: string;
                    };
                };
            };
        };
        placement: {
            [key: string]: {
                attributes?: Record<Attribute["key"], Attribute["value"]>;
                signedBy?: {
                    allOf?: string[];
                    anyOf?: string[];
                };
                pricing: {
                    [key: string]: {
                        denom: string;
                        amount: number;
                    };
                };
            };
        };
    };
    deployment: {
        [key: string]: {
            [key: string]: {
                profile: string;
                count: Service["Count"];
            };
        };
    };
}
export declare class SDL {
    readonly data: SDLSpec;
    readonly manifest: Manifest;
    readonly groups: GroupSpec[];
    constructor(sdlString: string);
    manifestVersion(): Promise<ArrayBuffer>;
    private sortJSON;
    private normalizeCPUUnit;
    private normalizeMemoryStorageUnit;
}
export declare function currentBlockHeight(akash: Akash): Promise<number>;
export declare function findDeploymentSequence(deployCreateResponse: BroadcastTxResponse): {
    dseq: number;
    oseq: number;
    gseq: number;
};
