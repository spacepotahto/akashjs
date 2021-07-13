import { Akash } from "../akash/akash";
import { leaseStatusPath, providerGatewayPost } from "../utils/provider";

export interface ProviderLeaseStatusParams {
  dseq: number,
  gseq: number,
  oseq: number,
  provider: string,
  proxy: string
}

export class ProviderLeaseStatus {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: ProviderLeaseStatusParams) {
    const owner = this.akash.address;

    const {
      dseq,
      gseq,
      oseq,
      provider,
      proxy
    } = params;

    const r = await this.akash.query.provider.get.params({ provider: provider });
    const providerUri = r.provider?.hostUri;
    
    if (!providerUri) {
      throw new Error(`Provider ${provider} not found on chain.`);
    }

    const uri = `${proxy}${leaseStatusPath({ dseq: dseq, gseq: gseq, oseq: oseq })}`;
    return providerGatewayPost(
      uri,
      providerUri,
      owner,
      'LEASE_STATUS'
    ).then(response => response.json());
  }
}