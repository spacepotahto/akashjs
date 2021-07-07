import Long from "long";
import {
  QueryClientImpl,
  QueryGroupRequest,
  QueryGroupResponse
} from "src/codec/akash/deployment/v1beta1/query";

export interface QueryDeploymentGroupGetParams {
  owner: string,
  dseq: number,
  gseq: number
}

export default class Get {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryDeploymentGroupGetParams): Promise<QueryGroupResponse> {
    const request: QueryGroupRequest = {
      id: {
        owner: params.owner,
        dseq: new Long(params.dseq),
        gseq: params.gseq
      }
    };
    return this.queryService.Group(request);
  }
}