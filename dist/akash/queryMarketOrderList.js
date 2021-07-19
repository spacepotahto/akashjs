"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMarketOrderList = void 0;
const long_1 = __importDefault(require("long"));
class QueryMarketOrderList {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params = {}) {
        const request = {};
        if (params.owner
            || params.dseq !== undefined
            || params.gseq !== undefined
            || params.oseq !== undefined
            || params.state) {
            request.filters = {
                owner: params.owner || "",
                dseq: params.dseq !== undefined ? new long_1.default(params.dseq) : long_1.default.UZERO,
                gseq: params.gseq || 0,
                oseq: params.oseq || 0,
                state: params.state || ""
            };
        }
        // TODO: support pagination, see createPagination()
        // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
        return this.queryService.Orders(request);
    }
}
exports.QueryMarketOrderList = QueryMarketOrderList;
//# sourceMappingURL=queryMarketOrderList.js.map