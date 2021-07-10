import { Akash } from "../akash/akash";
import { MsgCreateCertificate } from "../codec/akash/cert/v1beta1/cert";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import {
  createPEMBlocks,
  savePEMBlocks,
  encode,
  stringToUint8Array
} from "../utils/certificate";

export interface TxCertCreateClientParams extends TxParams {
  naf?: number, // certificate is not valid after this many days.
  nbf?: Date // certificate is not valid before this date.
}

export class TxCertCreateClient {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxCertCreateClientParams = {}): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = this.akash.defaultFee,
      naf = 365,
      nbf = new Date()
    } = params;

    const pemBlocks = await createPEMBlocks(owner, naf, nbf);
    const encodedPem = encode(pemBlocks);

    const request: MsgCreateCertificate = {
      owner: owner,
      cert: stringToUint8Array(encodedPem.certificate),
      pubkey: stringToUint8Array(encodedPem.publicKey)
    };

    const response = this.akash.signingClient.certCreateClient(owner, request, fee, memo);
    response.then(() => {
      // save certificate to IndexedDB
      savePEMBlocks(pemBlocks);
    });
    return response;
  }
}