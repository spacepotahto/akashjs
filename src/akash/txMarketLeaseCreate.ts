import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgCreateLease } from "../codec/akash/market/v1beta1/lease";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";

export interface TxMarketLeaseCreateParams extends TxParams {
  dseq: number,
  gseq: number,
  oseq: number,
  provider: string
}

export class TxMarketLeaseCreate {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxMarketLeaseCreateParams): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = defaultFee,
      dseq,
      gseq,
      oseq,
      provider
    } = params;

    const request: MsgCreateLease = {
      bidId: {
        owner: owner,
        dseq: new Long(dseq),
        gseq: gseq,
        oseq: oseq,
        provider: provider
      }
    };

    return this.akash.signingClient.marketLeaseCreate(owner, request, fee, memo);
  }
}