"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProviderGet = void 0;
class QueryProviderGet {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params) {
        const request = {
            owner: params.provider
        };
        return this.queryService.Provider(request);
    }
}
exports.QueryProviderGet = QueryProviderGet;
//# sourceMappingURL=queryProviderGet.js.map