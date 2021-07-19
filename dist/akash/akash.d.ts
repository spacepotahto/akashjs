import { OfflineSigner } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { SigningAkashClient } from "./signingAkashClient";
import { ProviderCmd, QueryCmd, TxCmd } from "./types";
export declare const denom = "uakt";
export declare const defaultFee: StdFee;
export declare class Akash {
    readonly address: string;
    readonly tmClient: Tendermint34Client;
    readonly signingClient: SigningAkashClient;
    readonly query: QueryCmd;
    readonly tx: TxCmd;
    readonly provider: ProviderCmd;
    static connect(endpoint: string, signer: OfflineSigner): Promise<Akash>;
    constructor(tmClient: Tendermint34Client, signingClient: SigningAkashClient, address: string);
}
