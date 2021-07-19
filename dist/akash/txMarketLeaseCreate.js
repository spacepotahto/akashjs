"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxMarketLeaseCreate = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
class TxMarketLeaseCreate {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, dseq, gseq, oseq, provider } = params;
        const request = {
            bidId: {
                owner: owner,
                dseq: new long_1.default(dseq),
                gseq: gseq,
                oseq: oseq,
                provider: provider
            }
        };
        return this.akash.signingClient.marketLeaseCreate(owner, request, fee, memo);
    }
}
exports.TxMarketLeaseCreate = TxMarketLeaseCreate;
//# sourceMappingURL=txMarketLeaseCreate.js.map