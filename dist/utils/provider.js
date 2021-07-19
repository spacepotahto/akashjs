"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerGatewayPost = exports.serviceLogsPath = exports.serviceStatusPath = exports.leaseEventsPath = exports.leaseStatusPath = exports.submitManifestPath = exports.leasePath = void 0;
const certificate_1 = require("./certificate");
function leasePath(id) {
    return `/lease/${id.dseq}/${id.gseq}/${id.oseq}`;
}
exports.leasePath = leasePath;
function submitManifestPath(dseq) {
    return `/deployment/${dseq}/manifest`;
}
exports.submitManifestPath = submitManifestPath;
function leaseStatusPath(id) {
    return `${leasePath(id)}/status`;
}
exports.leaseStatusPath = leaseStatusPath;
function leaseEventsPath(id) {
    return `${leasePath(id)}/kubeevents`;
}
exports.leaseEventsPath = leaseEventsPath;
function serviceStatusPath(id, service) {
    return `${leasePath(id)}/service/${service}/status`;
}
exports.serviceStatusPath = serviceStatusPath;
function serviceLogsPath(id) {
    return `${leasePath(id)}/logs`;
}
exports.serviceLogsPath = serviceLogsPath;
async function providerGatewayPost(uri, providerUri, owner, type, payload = {}) {
    const pemStrings = await certificate_1.getPemStrings(owner);
    const body = {
        providerUri: providerUri,
        cert: pemStrings.cert,
        key: pemStrings.key,
        type: type,
        manifest: payload.manifest
    };
    return fetch(uri, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
}
exports.providerGatewayPost = providerGatewayPost;
//# sourceMappingURL=provider.js.map