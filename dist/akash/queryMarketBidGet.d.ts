import { QueryClientImpl, QueryBidResponse } from "../codec/akash/market/v1beta1/query";
export interface QueryMarketBidGetParams {
    owner: string;
    dseq: number;
    gseq: number;
    oseq: number;
    provider: string;
}
export declare class QueryMarketBidGet {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params: QueryMarketBidGetParams): Promise<QueryBidResponse>;
}
