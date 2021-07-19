import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
export interface TxDeploymentGroupStartParams extends TxParams {
    dseq: number;
    gseq: number;
}
export declare class TxDeploymentGroupStart {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxDeploymentGroupStartParams): Promise<BroadcastTxResponse>;
}
