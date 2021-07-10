import Long from "long";
import {
  QueryClientImpl,
  QueryDeploymentsRequest,
  QueryDeploymentsResponse
} from "../codec/akash/deployment/v1beta1/query";

export interface QueryDeploymentListParams {
  countTotal?: boolean,
  dseq?: number,
  limit?: number,
  offset?: number,
  owner?: string,
  page?: number,
  pageKey?: string,
  state?: "active" | "closed"
}

export class QueryDeploymentList {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryDeploymentListParams = {}): Promise<QueryDeploymentsResponse> {
    const request: QueryDeploymentsRequest = {};
    if (params.owner || params.dseq !== undefined || params.state) {
      request.filters = {
        owner: params.owner || "",
        dseq: params.dseq !== undefined ? new Long(params.dseq) : Long.UZERO,
        state: params.state || ""
      };
    }
    // TODO: support pagination
    return this.queryService.Deployments(request);
  }
}