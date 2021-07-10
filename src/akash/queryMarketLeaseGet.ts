import Long from "long";
import {
  QueryClientImpl,
  QueryLeaseRequest,
  QueryLeaseResponse
} from "../codec/akash/market/v1beta1/query";

export interface QueryMarketLeaseGetParams {
  owner: string,
  dseq: number,
  gseq: number,
  oseq: number,
  provider: string
}

export class QueryMarketLeaseGet {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryMarketLeaseGetParams): Promise<QueryLeaseResponse> {
    const request: QueryLeaseRequest = {
      id: {
        owner: params.owner,
        dseq: new Long(params.dseq),
        gseq: params.gseq,
        oseq: params.oseq,
        provider: params.provider
      }
    };
    return this.queryService.Lease(request);
  }
}