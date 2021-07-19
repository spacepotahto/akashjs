import { Akash } from "../akash/akash";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
export interface TxMarketLeaseCreateParams extends TxParams {
    dseq: number;
    gseq: number;
    oseq: number;
    provider: string;
}
export declare class TxMarketLeaseCreate {
    private readonly akash;
    constructor(akash: Akash);
    params(params: TxMarketLeaseCreateParams): Promise<BroadcastTxResponse>;
}
