import {
  QueryClientImpl,
  QueryAllProvidersAttributesRequest,
  QueryProvidersResponse
} from "../codec/akash/audit/v1beta1/query";

export interface QueryAuditListParams {
  countTotal?: boolean,
  limit?: number,
  offset?: number,
  page?: number,
  pageKey?: string
}

export class QueryAuditList {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryAuditListParams = {}): Promise<QueryProvidersResponse> {
    const request: QueryAllProvidersAttributesRequest = {};
    // TODO: support pagination, see createPagination()
    // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
    return this.queryService.AllProvidersAttributes(request);
  }
}