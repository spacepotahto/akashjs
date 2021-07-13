import { providerGatewayPost, submitManifestPath } from "../utils/provider";
import { Akash } from "../akash/akash";
import { SDL } from "../utils/deployment";

export interface ProviderSendManifestParams {
  sdl: SDL,
  dseq: number,
  provider: string,
  proxy: string
}

export class ProviderSendManifest {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: ProviderSendManifestParams) {
    const owner = this.akash.address;

    const {
      sdl,
      dseq,
      provider,
      proxy
    } = params;

    const manifest = sdl.manifest;

    const r = await this.akash.query.provider.get.params({ provider: provider });
    const providerUri = r.provider?.hostUri;
    
    if (!providerUri) {
      throw new Error(`Provider ${provider} not found on chain.`);
    }

    const uri = `${proxy}${submitManifestPath(dseq)}`;
    return providerGatewayPost(
      uri,
      providerUri,
      owner,
      'SEND_MANIFEST',
      { manifest: manifest }
    ).then(response => response.text());
  }
}