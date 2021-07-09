import {
  QueryClientImpl,
  QueryProviderAuditorRequest,
  QueryProvidersResponse
 } from "../../../../codec/akash/audit/v1beta1/query";

export interface QueryAuditGetParams {
  auditor: string;
  owner: string;
}

export default class Get {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryAuditGetParams): Promise<QueryProvidersResponse> {
    const request: QueryProviderAuditorRequest = {
      auditor: params.auditor,
      owner: params.owner
    };
    return this.queryService.ProviderAuditorAttributes(request);
  }
}