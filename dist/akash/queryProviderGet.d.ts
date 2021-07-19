import { QueryClientImpl, QueryProviderResponse } from "../codec/akash/provider/v1beta1/query";
export interface QueryProviderGetParams {
    provider: string;
}
export declare class QueryProviderGet {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params: QueryProviderGetParams): Promise<QueryProviderResponse>;
}
