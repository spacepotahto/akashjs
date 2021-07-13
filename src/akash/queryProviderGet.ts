import {
  QueryClientImpl,
  QueryProviderRequest,
  QueryProviderResponse
} from "../codec/akash/provider/v1beta1/query";

export interface QueryProviderGetParams {
  provider: string
}

export class QueryProviderGet {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryProviderGetParams): Promise<QueryProviderResponse> {
    const request: QueryProviderRequest = {
      owner: params.provider
    };
    return this.queryService.Provider(request);
  }
}