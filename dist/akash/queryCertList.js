"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCertList = void 0;
class QueryCertList {
    constructor(queryService) {
        this.queryService = queryService;
    }
    async params(params = {}) {
        const request = {};
        if (params.owner || params.serial || params.state) {
            request.filter = {
                owner: params.owner || "",
                serial: params.serial || "",
                state: params.state || ""
            };
        }
        // TODO: support pagination, see createPagination()
        // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
        return this.queryService.Certificates(request);
    }
}
exports.QueryCertList = QueryCertList;
//# sourceMappingURL=queryCertList.js.map