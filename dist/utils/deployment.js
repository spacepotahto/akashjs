"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDeploymentSequence = exports.currentBlockHeight = exports.SDL = void 0;
const common_1 = require("pkijs/src/common");
const pvutils_1 = require("pvutils");
const js_yaml_1 = __importStar(require("js-yaml"));
const endpoint_1 = require("../codec/akash/base/v1beta1/endpoint");
const logs_1 = require("@cosmjs/stargate/build/logs");
class SDL {
    constructor(sdlString) {
        this.data = js_yaml_1.default.load(sdlString, { schema: js_yaml_1.DEFAULT_SCHEMA });
        const groupServices = {};
        Object.keys(this.data.deployment).forEach((serviceName) => {
            Object.keys(this.data.deployment[serviceName]).forEach((groupName) => {
                if (groupServices[groupName]) {
                    groupServices[groupName].push(serviceName);
                }
                else {
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
                    const serviceComputeResources = this.data.profiles.compute[serviceName].resources;
                    const normalizedCPUUnit = this.normalizeCPUUnit(serviceComputeResources.cpu.units.toString());
                    const normalizedMemoryUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.memory.size);
                    const normalizedStorageUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.storage.size);
                    const endpoints = [];
                    this.data.services[serviceName].expose.forEach((expose) => {
                        const proto = expose.proto || "tcp"; // default tcp
                        const isTCP = proto === "http" || proto === "https" || proto === "tcp";
                        const externalPortExpose = expose.as || expose.port;
                        if (expose.to) {
                            expose.to.forEach((to) => {
                                if (to.global) {
                                    let kind = endpoint_1.Endpoint_Kind.RANDOM_PORT;
                                    const shouldBeIngress = isTCP && externalPortExpose === 80;
                                    if (shouldBeIngress) {
                                        kind = endpoint_1.Endpoint_Kind.SHARED_HTTP;
                                    }
                                    endpoints.push({ kind: kind });
                                }
                            });
                        }
                    });
                    return {
                        count: this.data.deployment[serviceName][groupName].count,
                        price: {
                            denom: this.data.profiles.placement[groupName].pricing[serviceName].denom,
                            amount: this.data.profiles.placement[groupName].pricing[serviceName].amount.toString()
                        },
                        resources: {
                            cpu: {
                                units: {
                                    val: new Uint8Array(pvutils_1.stringToArrayBuffer(normalizedCPUUnit))
                                },
                                attributes: []
                            },
                            memory: {
                                quantity: {
                                    val: new Uint8Array(pvutils_1.stringToArrayBuffer(normalizedMemoryUnit))
                                },
                                attributes: []
                            },
                            storage: {
                                quantity: {
                                    val: new Uint8Array(pvutils_1.stringToArrayBuffer(normalizedStorageUnit))
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
                    const serviceComputeResources = this.data.profiles.compute[serviceName].resources;
                    const normalizedCPUUnit = this.normalizeCPUUnit(serviceComputeResources.cpu.units.toString());
                    const normalizedMemoryUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.memory.size);
                    const normalizedStorageUnit = this.normalizeMemoryStorageUnit(serviceComputeResources.storage.size);
                    const serviceExpose = this.data.services[serviceName].expose;
                    const flattenedExpose = [];
                    serviceExpose.forEach((expose) => {
                        if (expose.to) {
                            expose.to.forEach((to) => {
                                flattenedExpose.push({
                                    Port: expose.port,
                                    ExternalPort: expose.as || 0,
                                    Proto: "TCP",
                                    Service: to.service || "",
                                    Global: to.global || false,
                                    Hosts: expose.accept || null
                                });
                            });
                        }
                        else {
                            flattenedExpose.push({
                                Port: expose.port,
                                ExternalPort: expose.as || 0,
                                Proto: "TCP",
                                Service: "",
                                Global: false,
                                Hosts: expose.accept || null
                            });
                        }
                    });
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
    async manifestVersion() {
        // Computes deterministic hash
        const crypto = common_1.getCrypto();
        const sortedJSONString = JSON.stringify(this.sortJSON(this.manifest));
        const sortedJSONArraryBuffer = pvutils_1.stringToArrayBuffer(sortedJSONString);
        return crypto.digest("SHA-256", sortedJSONArraryBuffer);
    }
    sortJSON(obj) {
        if (Array.isArray(obj)) {
            // golang version doesn't sort on arrays it seems
            return obj.map(e => this.sortJSON(e));
        }
        if (obj && typeof obj === 'object') {
            return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, this.sortJSON(v)]).sort());
        }
        return obj;
    }
    normalizeCPUUnit(unit) {
        // Normalizes a user given CPU unit string to number of milli-CPUs shares. E.g.:
        // "1" vCPU -> "1000" milli-CPUs
        // "0.5" -> "500"
        // "100m" (= 1/1000 * 100 = 0.1 vCPUs) -> "100" milli-CPUs
        // "50m" -> "50"
        let lhs = parseFloat(unit);
        const rhs = unit[unit.length - 1];
        if (rhs !== "m") {
            lhs *= 1000;
        }
        return lhs.toString();
    }
    normalizeMemoryStorageUnit(unit) {
        // Normalizes a user given memory or storage unit string to number of bytes. E.g.:
        // "512Mi" -> "536870912" (512 * 1024^2)
        // See https://docs.akash.network/sdl#profiles-compute table
        const suffixValueMap = {
            k: 1000,
            Ki: 1024,
            M: 1000 ** 2,
            Mi: 1024 ** 2,
            G: 1000 ** 3,
            Gi: 1024 ** 3,
            T: 1000 ** 4,
            Ti: 1024 ** 4,
            P: 1000 ** 5,
            Pi: 1024 ** 5,
            E: 1000 ** 6,
            Ei: 1024 ** 6
        };
        const lhs = parseFloat(unit);
        const rhs = unit.replace(lhs.toString(), "");
        const multiplier = suffixValueMap[rhs] || 1;
        return (lhs * multiplier).toString();
    }
}
exports.SDL = SDL;
async function currentBlockHeight(akash) {
    const response = await akash.tmClient.status();
    return response.syncInfo.latestBlockHeight;
}
exports.currentBlockHeight = currentBlockHeight;
function findDeploymentSequence(deployCreateResponse) {
    const logs = logs_1.parseRawLog(deployCreateResponse.rawLog);
    const eventType = "akash.v1";
    return {
        dseq: Number(logs_1.findAttribute(logs, eventType, "dseq").value),
        gseq: Number(logs_1.findAttribute(logs, eventType, "gseq").value),
        oseq: Number(logs_1.findAttribute(logs, eventType, "oseq").value)
    };
}
exports.findDeploymentSequence = findDeploymentSequence;
//# sourceMappingURL=deployment.js.map