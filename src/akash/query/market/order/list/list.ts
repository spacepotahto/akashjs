import Long from "long";
import {
  QueryClientImpl,
  QueryOrdersRequest,
  QueryOrdersResponse
} from "src/codec/akash/market/v1beta1/query";

export interface QueryOrderListParams {
  owner?: string;
  dseq?: number;
  gseq?: number;
  oseq?: number;
  state?: "open" | "matched" | "closed";
}

export default class List {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryOrderListParams = {}): Promise<QueryOrdersResponse> {
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
    // TODO: support pagination
    return this.queryService.Orders(request);
  }
}