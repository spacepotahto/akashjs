import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "../../../codec/akash/cert/v1beta1/query";
import List from "./list/List";

export default class Cert {
  public readonly list: List;

  constructor (rpcClient: ProtobufRpcClient) {
    const queryService = new QueryClientImpl(rpcClient);
    this.list = new List(queryService);
  }
}