import { QueryClientImpl, QueryProvidersResponse } from "../codec/akash/audit/v1beta1/query";
export interface QueryAuditGetParams {
    auditor: string;
    owner: string;
}
export declare class QueryAuditGet {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params: QueryAuditGetParams): Promise<QueryProvidersResponse>;
}
