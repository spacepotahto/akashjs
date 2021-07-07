import { OfflineSigner } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { SigningAkashClient } from "./signingakashclient";
import Query from "./query/query";
import Tx from "./tx/tx";

export const defaultFee: StdFee = {
  amount: [
    {
      denom: "uakt",
      amount: "5000",
    }
  ],
  gas: "200000"
};

export class Akash {
  public readonly address: string;
  public readonly signingClient: SigningAkashClient;
  public readonly defaultFee = defaultFee;

  public readonly query: Query;
  public readonly tx: Tx;

  public static async connect(
    endpoint: string,
    signer: OfflineSigner
  ): Promise<Akash> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    const signingClient = await SigningAkashClient.connectWithSigner(endpoint, signer);
    const accounts = await signer.getAccounts();
    const address = accounts[0].address;
    return new Akash(tmClient, signingClient, address);
  }

  constructor(
    tmClient: Tendermint34Client,
    signingClient: SigningAkashClient,
    address: string
  ) {
    this.address = address;
    this.signingClient = signingClient;

    this.query = new Query(tmClient);
    this.tx = new Tx(this);
  }
}