import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
export interface TxDeploymentGroupPauseParams extends TxParams {
    dseq: number;
    gseq: number;
}
export declare class TxDeploymentGroupPause {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxDeploymentGroupPauseParams): Promise<BroadcastTxResponse>;
}
