import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgCloseGroup } from "../codec/akash/deployment/v1beta1/group";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";

export interface TxDeploymentGroupCloseParams extends TxParams {
  dseq: number,
  gseq: number
}

export class TxDeploymentGroupClose {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxDeploymentGroupCloseParams): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = defaultFee,
      dseq,
      gseq
    } = params;

    const request: MsgCloseGroup = {
      id: {
        owner: owner,
        dseq: new Long(dseq),
        gseq: gseq
      }
    };

    return this.akash.signingClient.deploymentGroupClose(owner, request, fee, memo);
  }
}