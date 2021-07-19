import { QueryClientImpl, QueryGroupResponse } from "../codec/akash/deployment/v1beta1/query";
export interface QueryDeploymentGroupGetParams {
    owner: string;
    dseq: number;
    gseq: number;
}
export declare class QueryDeploymentGroupGet {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params: QueryDeploymentGroupGetParams): Promise<QueryGroupResponse>;
}
