import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "src/codec/akash/deployment/v1beta1/query";
import Get from "./get/get";
import List from "./list/list";

export default class Deployment {
  public readonly list: List;
  public readonly get: Get;

  constructor(rpcClient: ProtobufRpcClient) {
    const queryService = new QueryClientImpl(rpcClient);
    this.list = new List(queryService);
    this.get = new Get(queryService);
  }
}