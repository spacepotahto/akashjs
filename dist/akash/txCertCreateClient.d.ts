import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
export interface TxCertCreateClientParams extends TxParams {
    naf?: number;
    nbf?: Date;
}
export declare class TxCertCreateClient {
    private readonly akash;
    constructor(akash: Akash);
    params(params?: TxCertCreateClientParams): Promise<BroadcastTxResponse>;
}
