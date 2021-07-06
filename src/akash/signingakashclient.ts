import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  defaultRegistryTypes,
  SigningStargateClient,
  SigningStargateClientOptions,
  BroadcastTxResponse
} from "@cosmjs/stargate";
import { MsgCreateDeployment } from "../codec/akash/deployment/v1beta1/deployment";
import { MsgCreateDeploymentEncodeObject } from "./encodeobjects";

function akashRegistry(): Registry {
  return new Registry([
    ...defaultRegistryTypes,
    ["/akash.deployment.v1beta1.MsgCreateDeployment", MsgCreateDeployment]
  ]);
}

export class SigningAkashClient extends SigningStargateClient {
  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner
  ): Promise<SigningAkashClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    const options: SigningStargateClientOptions = {
      registry: akashRegistry()
    };
    return new SigningAkashClient(tmClient, signer, options);
  }

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
  ) {
    super(tmClient, signer, options);
  }

  public async deploymentCreate(
    accountAddress: string,
    value: MsgCreateDeployment,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgCreateDeploymentEncodeObject = {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value: value
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

}

