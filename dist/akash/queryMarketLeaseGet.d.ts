import { QueryClientImpl, QueryLeaseResponse } from "../codec/akash/market/v1beta1/query";
export interface QueryMarketLeaseGetParams {
    owner: string;
    dseq: number;
    gseq: number;
    oseq: number;
    provider: string;
}
export declare class QueryMarketLeaseGet {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params: QueryMarketLeaseGetParams): Promise<QueryLeaseResponse>;
}
