import {
  QueryClientImpl,
  QueryProvidersRequest,
  QueryProvidersResponse
} from "src/codec/akash/provider/v1beta1/query";

export interface QueryProviderListParams {
  countTotal?: boolean,
  limit?: number,
  offset?: number,
  page?: number,
  pageKey?: string
}

export default class List {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryProviderListParams = {}): Promise<QueryProvidersResponse> {
    const request: QueryProvidersRequest = {};
    // TODO: support pagination
    return this.queryService.Providers(request);
  }
}