import { OfflineSigner } from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { SigningStargateClient, SigningStargateClientOptions } from "@cosmjs/stargate";
import Query from "./query/Query";

export default class Akash {
  public readonly query: Query;

  public static async connect(
    endpoint: string,
    // signer: OfflineSigner,
    // options?: SigningStargateClientOptions = {}
  ): Promise<Akash> {
    const tmClient = await Tendermint34Client.connect(endpoint);

    return new Akash(tmClient);
  }

  constructor(
    tmClient: Tendermint34Client,
    // signingClient: SigningStargateClient
  ) {
    this.query = new Query(tmClient);
  }
}