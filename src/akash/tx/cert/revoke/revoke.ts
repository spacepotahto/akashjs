import { Akash } from "../../../akash";
import { StdFee } from "@cosmjs/amino";
import { MsgRevokeCertificate } from "../../../../codec/akash/cert/v1beta1/cert";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../../../types";

export interface TxCertRevokeParams extends TxParams {
  serial?: string
}

export default class Revoke {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  private async getSerial(owner: string): Promise<string> {
    const certs = await this.akash.query.cert.list.params({ owner: owner, state: "valid" });
    if (certs.certificates.length === 0) {
      return "";
    }
    return certs.certificates[0].serial;
  }

  public async params(params: TxCertRevokeParams = {}): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = this.akash.defaultFee,
      serial = await this.getSerial(owner)
    } = params;

    const request: MsgRevokeCertificate = {
      id: {
        owner: owner,
        serial: serial
      }
    };

    return this.akash.signingClient.certRevoke(owner, request, fee, memo);
  }
}