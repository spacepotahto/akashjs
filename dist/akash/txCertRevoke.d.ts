import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
export interface TxCertRevokeParams extends TxParams {
    serial?: string;
}
export declare class TxCertRevoke {
    private readonly akash;
    constructor(akash: Akash);
    private getSerial;
    params(params?: TxCertRevokeParams): Promise<BroadcastTxResponse>;
}
