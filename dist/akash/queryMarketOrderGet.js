"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMarketOrderGet = void 0;
const long_1 = __importDefault(require("long"));
class QueryMarketOrderGet {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params) {
        const request = {
            id: {
                owner: params.owner,
                dseq: new long_1.default(params.dseq),
                gseq: params.gseq,
                oseq: params.oseq
            }
        };
        return this.queryService.Order(request);
    }
}
exports.QueryMarketOrderGet = QueryMarketOrderGet;
//# sourceMappingURL=queryMarketOrderGet.js.map