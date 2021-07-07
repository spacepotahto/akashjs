import { QueryClientImpl } from "src/codec/akash/deployment/v1beta1/query";
import Get from "./get/get";

export default class Group {
  public readonly get: Get;

  constructor (queryService: QueryClientImpl) {
    this.get = new Get(queryService);
  }
}