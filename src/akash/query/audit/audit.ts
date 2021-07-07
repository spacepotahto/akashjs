import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "src/codec/akash/audit/v1beta1/query";
import Get from "./get/get";
import List from "./list/list";

export default class Audit {
  public readonly get: Get;
  public readonly list: List;

  constructor (rpcClient: ProtobufRpcClient) {
    const queryService = new QueryClientImpl(rpcClient);
    this.get = new Get(queryService);
    this.list = new List(queryService);
  }
}