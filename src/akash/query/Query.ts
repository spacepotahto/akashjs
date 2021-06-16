import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import Deployment from "./deployment/Deployment";

export default class Query {
  public readonly deployment: Deployment;

  constructor(tmClient: Tendermint34Client) {
    const queryClient = new QueryClient(tmClient);
    const rpcClient = createProtobufRpcClient(queryClient);

    this.deployment = new Deployment(rpcClient);
  }
}