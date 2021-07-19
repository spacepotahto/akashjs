import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
export interface TxDeploymentGroupCloseParams extends TxParams {
    dseq: number;
    gseq: number;
}
export declare class TxDeploymentGroupClose {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxDeploymentGroupCloseParams): Promise<BroadcastTxResponse>;
}
