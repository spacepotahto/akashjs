import { QueryClientImpl, QueryLeasesResponse } from "../codec/akash/market/v1beta1/query";
export interface QueryLeaseListParams {
    owner?: string;
    dseq?: number;
    gseq?: number;
    oseq?: number;
    provider?: string;
    state?: "active" | "insufficient_funds" | "closed";
}
export declare class QueryMarketLeaseList {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params?: QueryLeaseListParams): Promise<QueryLeasesResponse>;
}
