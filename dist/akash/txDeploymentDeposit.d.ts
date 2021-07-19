import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import { Coin } from "../codec/cosmos/base/v1beta1/coin";
export interface TxDeploymentDepositParams extends TxParams {
    dseq: number;
    amount: Coin;
}
export declare class TxDeploymentDeposit {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxDeploymentDepositParams): Promise<BroadcastTxResponse>;
}
