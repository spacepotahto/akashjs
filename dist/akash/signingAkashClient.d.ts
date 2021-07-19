import { OfflineSigner } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { SigningStargateClient, SigningStargateClientOptions, BroadcastTxResponse } from "@cosmjs/stargate";
import { MsgCreateCertificate, MsgRevokeCertificate } from "../codec/akash/cert/v1beta1/cert";
import { MsgCloseDeployment, MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment } from "../codec/akash/deployment/v1beta1/deployment";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../codec/akash/deployment/v1beta1/group";
import { MsgCreateLease } from "../codec/akash/market/v1beta1/lease";
export declare class SigningAkashClient extends SigningStargateClient {
    static connectWithSigner(endpoint: string, signer: OfflineSigner): Promise<SigningAkashClient>;
    protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningStargateClientOptions);
    certCreateClient(accountAddress: string, value: MsgCreateCertificate, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    certRevoke(accountAddress: string, value: MsgRevokeCertificate, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    deploymentCreate(accountAddress: string, value: MsgCreateDeployment, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    deploymentClose(accountAddress: string, value: MsgCloseDeployment, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    deploymentDeposit(accountAddress: string, value: MsgDepositDeployment, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    deploymentUpdate(accountAddress: string, value: MsgUpdateDeployment, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    deploymentGroupClose(accountAddress: string, value: MsgCloseGroup, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    deploymentGroupPause(accountAddress: string, value: MsgPauseGroup, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    deploymentGroupStart(accountAddress: string, value: MsgStartGroup, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    marketLeaseCreate(accountAddress: string, value: MsgCreateLease, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
}
