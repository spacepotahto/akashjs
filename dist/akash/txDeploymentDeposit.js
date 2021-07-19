"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxDeploymentDeposit = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
class TxDeploymentDeposit {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, dseq, amount } = params;
        const request = {
            id: {
                owner: owner,
                dseq: new long_1.default(dseq)
            },
            amount: amount
        };
        return this.akash.signingClient.deploymentDeposit(owner, request, fee, memo);
    }
}
exports.TxDeploymentDeposit = TxDeploymentDeposit;
//# sourceMappingURL=txDeploymentDeposit.js.map