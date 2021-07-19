import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import { Coin } from "../codec/cosmos/base/v1beta1/coin";
import { SDL } from "../utils/deployment";
export interface TxDeploymentCreateParams extends TxParams {
    sdl: SDL;
    dseq?: number;
    deposit?: Coin;
}
export declare class TxDeploymentCreate {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxDeploymentCreateParams): Promise<BroadcastTxResponse>;
}
