"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMarketBidGet = void 0;
const long_1 = __importDefault(require("long"));
class QueryMarketBidGet {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params) {
        const request = {
            id: {
                owner: params.owner,
                dseq: new long_1.default(params.dseq),
                gseq: params.gseq,
                oseq: params.oseq,
                provider: params.provider
            }
        };
        return this.queryService.Bid(request);
    }
}
exports.QueryMarketBidGet = QueryMarketBidGet;
//# sourceMappingURL=queryMarketBidGet.js.map