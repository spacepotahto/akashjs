import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import { SDL } from "../utils/deployment";
export interface TxDeploymentUpdateParams extends TxParams {
    sdl: SDL;
    dseq: number;
}
export declare class TxDeploymentUpdate {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxDeploymentUpdateParams): Promise<BroadcastTxResponse>;
}
