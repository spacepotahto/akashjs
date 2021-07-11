import Long from "long";
import {
  QueryClientImpl,
  QueryOrdersRequest,
  QueryOrdersResponse
} from "../codec/akash/market/v1beta1/query";

export interface QueryMarketOrderListParams {
  owner?: string;
  dseq?: number;
  gseq?: number;
  oseq?: number;
  state?: "open" | "matched" | "closed";
}

export class QueryMarketOrderList {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryMarketOrderListParams = {}): Promise<QueryOrdersResponse> {
    const request: QueryOrdersRequest = {};
    if (
      params.owner
      || params.dseq !== undefined
      || params.gseq !== undefined
      || params.oseq !== undefined
      || params.state
    ) {
      request.filters = {
        owner: params.owner || "",
        dseq: params.dseq !== undefined ? new Long(params.dseq) : Long.UZERO,
        gseq: params.gseq || 0,
        oseq: params.oseq || 0,
        state: params.state || ""
      };
    }
    // TODO: support pagination, see createPagination()
    // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
    return this.queryService.Orders(request);
  }
}