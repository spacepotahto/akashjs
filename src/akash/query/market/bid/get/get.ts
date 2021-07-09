import Long from "long";
import {
  QueryClientImpl,
  QueryBidRequest,
  QueryBidResponse
} from "../../../../../codec/akash/market/v1beta1/query";

export interface QueryMarketBidGetParams {
  owner: string,
  dseq: number,
  gseq: number,
  oseq: number,
  provider: string
}

export default class Get {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryMarketBidGetParams): Promise<QueryBidResponse> {
    const request: QueryBidRequest = {
      id: {
        owner: params.owner,
        dseq: new Long(params.dseq),
        gseq: params.gseq,
        oseq: params.oseq,
        provider: params.provider
      }
    };
    return this.queryService.Bid(request);
  }
}