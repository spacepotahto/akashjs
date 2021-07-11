import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgUpdateDeployment } from "../codec/akash/deployment/v1beta1/deployment";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import { SDL } from "../utils/deployment";

export interface TxDeploymentUpdateParams extends TxParams {
  sdl: SDL,
  dseq: number
}

export class TxDeploymentUpdate {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxDeploymentUpdateParams): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = defaultFee,
      dseq,
      sdl
    } = params;

    const request: MsgUpdateDeployment = {
      id: {
        owner: owner,
        dseq: new Long(dseq)
      },
      groups: sdl.groups,
      version: new Uint8Array(await sdl.manifestVersion())
    };

    return this.akash.signingClient.deploymentUpdate(owner, request, fee, memo);
  }
}