import {
    QueryClientImpl,
    QueryCertificatesRequest,
    QueryCertificatesResponse
  } from "../../../../codec/akash/cert/v1beta1/query";
  
  export interface QueryCertListParams {
    owner?: string;
    serial?: string;
    state?: string;
  }
  
  export default class List {
    private readonly queryService: QueryClientImpl;
  
    constructor (queryService: QueryClientImpl) {
      this.queryService = queryService;
    }
  
    public async params(params: QueryCertListParams = {}): Promise<QueryCertificatesResponse> {
      const request: QueryCertificatesRequest = {};
      // TODO: support filters? Current cli doesn't support it
      // TODO: support pagination
      return this.queryService.Certificates(request);
    }
  }