import Long from "long";
import {
  QueryClientImpl,
  QueryOrderRequest,
  QueryOrderResponse
} from "../../../../../codec/akash/market/v1beta1/query";

export interface QueryMarketLeaseGetParams {
  owner: string,
  dseq: number,
  gseq: number,
  oseq: number
}

export default class Get {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryMarketLeaseGetParams): Promise<QueryOrderResponse> {
    const request: QueryOrderRequest = {
      id: {
        owner: params.owner,
        dseq: new Long(params.dseq),
        gseq: params.gseq,
        oseq: params.oseq
      }
    };
    return this.queryService.Order(request);
  }
}