import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
export interface TxDeploymentCloseParams extends TxParams {
    dseq: number;
}
export declare class TxDeploymentClose {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxDeploymentCloseParams): Promise<BroadcastTxResponse>;
}
