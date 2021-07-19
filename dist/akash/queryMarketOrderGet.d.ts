import { QueryClientImpl, QueryOrderResponse } from "../codec/akash/market/v1beta1/query";
export interface QueryMarketOrderGetParams {
    owner: string;
    dseq: number;
    gseq: number;
    oseq: number;
}
export declare class QueryMarketOrderGet {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params: QueryMarketOrderGetParams): Promise<QueryOrderResponse>;
}
