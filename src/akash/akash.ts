import { OfflineSigner } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { SigningAkashClient } from "./signingakashclient";
import Query from "./query/query";

const defaultFee: StdFee = {
  amount: [
    {
      denom: "uakt",
      amount: "5000",
    }
  ],
  gas: "200000"
};

export class Akash {
  public readonly query: Query;

  public static async connect(
    endpoint: string,
    signer: OfflineSigner
  ): Promise<Akash> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    const signingClient = await SigningAkashClient.connectWithSigner(endpoint, signer);
    return new Akash(tmClient, signingClient);
  }

  constructor(
    tmClient: Tendermint34Client,
    signingClient: SigningAkashClient
  ) {
    this.query = new Query(tmClient);
  }
}