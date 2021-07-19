import { QueryClientImpl, QueryDeploymentsResponse } from "../codec/akash/deployment/v1beta1/query";
export interface QueryDeploymentListParams {
    countTotal?: boolean;
    dseq?: number;
    limit?: number;
    offset?: number;
    owner?: string;
    page?: number;
    pageKey?: string;
    state?: "active" | "closed";
}
export declare class QueryDeploymentList {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params?: QueryDeploymentListParams): Promise<QueryDeploymentsResponse>;
}
