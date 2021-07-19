import { QueryClientImpl, QueryProvidersResponse } from "../codec/akash/provider/v1beta1/query";
export interface QueryProviderListParams {
    countTotal?: boolean;
    limit?: number;
    offset?: number;
    page?: number;
    pageKey?: string;
}
export declare class QueryProviderList {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params?: QueryProviderListParams): Promise<QueryProvidersResponse>;
}
