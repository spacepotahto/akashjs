"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuditList = void 0;
class QueryAuditList {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params = {}) {
        const request = {};
        // TODO: support pagination, see createPagination()
        // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
        return this.queryService.AllProvidersAttributes(request);
    }
}
exports.QueryAuditList = QueryAuditList;
//# sourceMappingURL=queryAuditList.js.map