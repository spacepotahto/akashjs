"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxDeploymentClose = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
class TxDeploymentClose {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, dseq } = params;
        const request = {
            id: {
                owner: owner,
                dseq: new long_1.default(dseq)
            }
        };
        return this.akash.signingClient.deploymentClose(owner, request, fee, memo);
    }
}
exports.TxDeploymentClose = TxDeploymentClose;
//# sourceMappingURL=txDeploymentClose.js.map