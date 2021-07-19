"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxDeploymentGroupPause = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
class TxDeploymentGroupPause {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, dseq, gseq } = params;
        const request = {
            id: {
                owner: owner,
                dseq: new long_1.default(dseq),
                gseq: gseq
            }
        };
        return this.akash.signingClient.deploymentGroupPause(owner, request, fee, memo);
    }
}
exports.TxDeploymentGroupPause = TxDeploymentGroupPause;
//# sourceMappingURL=txDeploymentGroupPause.js.map