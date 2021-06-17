import { QueryClientImpl } from "../../../../codec/akash/market/v1beta1/query";
import Get from "./get/Get";
import List from "./list/List";

export default class Bid {
  public readonly get: Get;
  public readonly list: List;

  constructor (queryService: QueryClientImpl) {
    this.get = new Get(queryService);
    this.list = new List(queryService);
  }
}