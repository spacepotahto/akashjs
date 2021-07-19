"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxDeploymentCreate = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
const deployment_1 = require("../utils/deployment");
class TxDeploymentCreate {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, deposit = {
            denom: akash_1.denom,
            amount: "5000000"
        }, dseq = await deployment_1.currentBlockHeight(this.akash), sdl } = params;
        const request = {
            id: {
                owner: owner,
                dseq: new long_1.default(dseq)
            },
            groups: sdl.groups,
            version: new Uint8Array(await sdl.manifestVersion()),
            deposit: deposit
        };
        return this.akash.signingClient.deploymentCreate(owner, request, fee, memo);
    }
}
exports.TxDeploymentCreate = TxDeploymentCreate;
//# sourceMappingURL=txDeploymentCreate.js.map