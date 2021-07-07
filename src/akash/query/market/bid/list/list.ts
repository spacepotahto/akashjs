import Long from "long";
import {
  QueryClientImpl,
  QueryBidsRequest,
  QueryBidsResponse
} from "src/codec/akash/market/v1beta1/query";

export interface QueryBidListParams {
  owner?: string;
  dseq?: number;
  gseq?: number;
  oseq?: number;
  provider?: string;
  state?: "open" | "matched" | "lost" | "closed";
}

export default class List {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryBidListParams = {}): Promise<QueryBidsResponse> {
    const request: QueryBidsRequest = {};
    if (
      params.owner
      || params.dseq !== undefined
      || params.gseq !== undefined
      || params.oseq !== undefined
      || params.provider
      || params.state
    ) {
      request.filters = {
        owner: params.owner || "",
        dseq: params.dseq !== undefined ? new Long(params.dseq) : Long.UZERO,
        gseq: params.gseq || 0,
        oseq: params.oseq || 0,
        provider: params.provider || "",
        state: params.state || ""
      };
    }
    // TODO: support pagination
    return this.queryService.Bids(request);
  }
}