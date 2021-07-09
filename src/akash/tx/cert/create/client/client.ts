import { Akash } from "../../../../../akash/akash";
import { MsgCreateCertificate } from "../../../../../codec/akash/cert/v1beta1/cert";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../../../../../akash/types";
import {
  createPEMBlocks,
  savePEMBlocks,
  encode,
  stringToUint8Array
} from "../../../../../utils/certificate";

export interface TxCertCreateParams extends TxParams {
  naf?: number, // certificate is not valid after this many days.
  nbf?: Date // certificate is not valid before this date.
}

export default class Client {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  private async createAndSavePEMBlocks(owner: string, naf: number, nbf: Date) {
    const pemBlocks = await createPEMBlocks(owner, naf, nbf);
    await savePEMBlocks(pemBlocks);
    return pemBlocks;
  }

  public async params(params: TxCertCreateParams = {}): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = this.akash.defaultFee,
      naf = 365,
      nbf = new Date()
    } = params;

    const pemBlocks = await this.createAndSavePEMBlocks(owner, naf, nbf);
    const encodedPem = encode(pemBlocks);

    const request: MsgCreateCertificate = {
      owner: owner,
      cert: stringToUint8Array(encodedPem.certificate),
      pubkey: stringToUint8Array(encodedPem.publicKey)
    };

    return this.akash.signingClient.certCreateClient(owner, request, fee, memo);
  }
}