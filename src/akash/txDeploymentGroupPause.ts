import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgPauseGroup } from "../codec/akash/deployment/v1beta1/group";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";

export interface TxDeploymentGroupPauseParams extends TxParams {
  dseq: number,
  gseq: number
}

export class TxDeploymentGroupPause {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxDeploymentGroupPauseParams): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = defaultFee,
      dseq,
      gseq
    } = params;

    const request: MsgPauseGroup = {
      id: {
        owner: owner,
        dseq: new Long(dseq),
        gseq: gseq
      }
    };

    return this.akash.signingClient.deploymentGroupPause(owner, request, fee, memo);
  }
}