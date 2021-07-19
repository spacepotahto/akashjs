import { QueryClientImpl, QueryBidsResponse } from "../codec/akash/market/v1beta1/query";
export interface QueryMarketBidListParams {
    owner?: string;
    dseq?: number;
    gseq?: number;
    oseq?: number;
    provider?: string;
    state?: "open" | "matched" | "lost" | "closed";
}
export declare class QueryMarketBidList {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params?: QueryMarketBidListParams): Promise<QueryBidsResponse>;
}
