import Long from "long";
import {
  QueryClientImpl,
  QueryDeploymentRequest,
  QueryDeploymentResponse
} from "../../../../codec/akash/deployment/v1beta1/query";

export interface QueryDeploymentGetParams {
  dseq: number,
  owner: string
}

export default class Get {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryDeploymentGetParams): Promise<QueryDeploymentResponse> {
    const request: QueryDeploymentRequest = {
      id: {
        owner: params.owner,
        dseq: new Long(params.dseq)
      }
    };
    return this.queryService.Deployment(request);
  }
}