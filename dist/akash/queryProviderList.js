"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProviderList = void 0;
class QueryProviderList {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params = {}) {
        const request = {};
        // TODO: support pagination, see createPagination()
        // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
        return this.queryService.Providers(request);
    }
}
exports.QueryProviderList = QueryProviderList;
//# sourceMappingURL=queryProviderList.js.map