import {
  QueryClientImpl,
  QueryProvidersRequest,
  QueryProvidersResponse
} from "../codec/akash/provider/v1beta1/query";

export interface QueryProviderListParams {
  countTotal?: boolean,
  limit?: number,
  offset?: number,
  page?: number,
  pageKey?: string
}

export class QueryProviderList {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryProviderListParams = {}): Promise<QueryProvidersResponse> {
    const request: QueryProvidersRequest = {};
    // TODO: support pagination, see createPagination()
    // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
    return this.queryService.Providers(request);
  }
}