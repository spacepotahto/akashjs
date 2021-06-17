import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import Audit from "./audit/Audit";
import Cert from "./cert/Cert";
import Deployment from "./deployment/Deployment";
import Market from "./market/Market";
import Provider from "./provider/Provider";

export default class Query {
  public readonly audit: Audit;
  public readonly cert: Cert;
  public readonly deployment: Deployment;
  public readonly market: Market;
  public readonly provider: Provider;

  constructor(tmClient: Tendermint34Client) {
    const queryClient = new QueryClient(tmClient);
    const rpcClient = createProtobufRpcClient(queryClient);

    this.audit = new Audit(rpcClient);
    this.cert = new Cert(rpcClient);
    this.deployment = new Deployment(rpcClient);
    this.market = new Market(rpcClient);
    this.provider = new Provider(rpcClient);
  }
}