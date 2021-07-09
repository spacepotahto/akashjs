import { Akash } from "../../../../akash/akash";
import { MsgRevokeCertificate } from "../../../../codec/akash/cert/v1beta1/cert";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../../../../akash/types";
import {
  loadPEMBlocks,
  deletePEMBlocks
} from "../../../../utils/certificate";

export interface TxCertRevokeParams extends TxParams {
  serial?: string
}

export default class Revoke {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  private async getSerial(owner: string): Promise<string> {
    // const certs = await this.akash.query.cert.list.params({ owner: owner, state: "valid" });
    // if (certs.certificates.length === 0) {
    //   return "";
    // }
    // return certs.certificates[0].serial;
    const cert = await loadPEMBlocks(owner);
    if (cert) {
      return cert.serialNumber.toString();
    }
    return "";
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

    const response = this.akash.signingClient.certRevoke(owner, request, fee, memo);
    response.then(() => {
      // Delete locally stored certificate if exists
      return deletePEMBlocks(owner, Number(serial));
    });
    return response;
  }
}