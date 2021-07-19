"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxDeploymentUpdate = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
class TxDeploymentUpdate {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, dseq, sdl } = params;
        const request = {
            id: {
                owner: owner,
                dseq: new long_1.default(dseq)
            },
            groups: sdl.groups,
            version: new Uint8Array(await sdl.manifestVersion())
        };
        return this.akash.signingClient.deploymentUpdate(owner, request, fee, memo);
    }
}
exports.TxDeploymentUpdate = TxDeploymentUpdate;
//# sourceMappingURL=txDeploymentUpdate.js.map