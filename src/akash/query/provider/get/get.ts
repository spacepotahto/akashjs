import {
  QueryClientImpl,
  QueryProviderRequest,
  QueryProviderResponse
} from "src/codec/akash/provider/v1beta1/query";

export interface QueryProviderGetParams {
  owner: string
}

export default class Get {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryProviderGetParams): Promise<QueryProviderResponse> {
    const request: QueryProviderRequest = {
      owner: params.owner
    };
    return this.queryService.Provider(request);
  }
}