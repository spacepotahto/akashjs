"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuditGet = void 0;
class QueryAuditGet {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params) {
        const request = {
            auditor: params.auditor,
            owner: params.owner
        };
        return this.queryService.ProviderAuditorAttributes(request);
    }
}
exports.QueryAuditGet = QueryAuditGet;
//# sourceMappingURL=queryAuditGet.js.map