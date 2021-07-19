import { QueryClientImpl, QueryProvidersResponse } from "../codec/akash/audit/v1beta1/query";
export interface QueryAuditListParams {
    countTotal?: boolean;
    limit?: number;
    offset?: number;
    page?: number;
    pageKey?: string;
}
export declare class QueryAuditList {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params?: QueryAuditListParams): Promise<QueryProvidersResponse>;
}
