import {
  QueryClientImpl,
  QueryAllProvidersAttributesRequest,
  QueryProvidersResponse
} from "../../../../codec/akash/audit/v1beta1/query";

export interface QueryAuditListParams {
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

  public async params(params: QueryAuditListParams = {}): Promise<QueryProvidersResponse> {
    const request: QueryAllProvidersAttributesRequest = {};
    // TODO: support pagination
    return this.queryService.AllProvidersAttributes(request);
  }
}