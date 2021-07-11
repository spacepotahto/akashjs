import Long from "long";
import { Akash, defaultFee, denom } from "../akash/akash";
import { MsgCreateDeployment } from "../codec/akash/deployment/v1beta1/deployment";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import { Coin } from "../codec/cosmos/base/v1beta1/coin";
import { SDL, currentBlockHeight } from "../utils/deployment";

export interface TxDeploymentCreateParams extends TxParams {
  sdl: SDL,
  dseq?: number,
  deposit?: Coin
}

export class TxDeploymentCreate {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxDeploymentCreateParams): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = defaultFee,
      deposit = {
        denom: denom,
        amount: "5000000"
      },
      dseq = await currentBlockHeight(this.akash),
      sdl
    } = params;

    const request: MsgCreateDeployment = {
      id: {
        owner: owner,
        dseq: new Long(dseq)
      },
      groups: sdl.groups,
      version: new Uint8Array(await sdl.manifestVersion()),
      deposit: deposit
    };

    return this.akash.signingClient.deploymentCreate(owner, request, fee, memo);
  }
}