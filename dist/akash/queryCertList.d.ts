import { QueryClientImpl, QueryCertificatesResponse } from "../codec/akash/cert/v1beta1/query";
export interface QueryCertListParams {
    owner?: string;
    serial?: string;
    state?: string;
}
export declare class QueryCertList {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params?: QueryCertListParams): Promise<QueryCertificatesResponse>;
}
