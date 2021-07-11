import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgCloseDeployment } from "../codec/akash/deployment/v1beta1/deployment";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";

export interface TxDeploymentCloseParams extends TxParams {
  dseq: number;
}

export class TxDeploymentClose {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxDeploymentCloseParams): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = defaultFee,
      dseq
    } = params;

    const request: MsgCloseDeployment = {
      id: {
        owner: owner,
        dseq: new Long(dseq)
      }
    };

    return this.akash.signingClient.deploymentClose(owner, request, fee, memo);
  }
}