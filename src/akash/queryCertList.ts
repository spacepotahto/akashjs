import {
  QueryClientImpl,
  QueryCertificatesRequest,
  QueryCertificatesResponse
} from "../codec/akash/cert/v1beta1/query";

export interface QueryCertListParams {
  owner?: string;
  serial?: string;
  state?: string;
}

export class QueryCertList {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryCertListParams = {}): Promise<QueryCertificatesResponse> {
    const request: QueryCertificatesRequest = {};
    if (params.owner || params.serial || params.state) {
      request.filter = {
        owner: params.owner || "",
        serial: params.serial || "",
        state: params.state || ""
      }
    }

    // TODO: support pagination, see createPagination()
    // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
    return this.queryService.Certificates(request);
  }
}