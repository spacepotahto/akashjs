import { QueryClientImpl, QueryDeploymentResponse } from "../codec/akash/deployment/v1beta1/query";
export interface QueryDeploymentGetParams {
    dseq: number;
    owner: string;
}
export declare class QueryDeploymentGet {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params: QueryDeploymentGetParams): Promise<QueryDeploymentResponse>;
}
