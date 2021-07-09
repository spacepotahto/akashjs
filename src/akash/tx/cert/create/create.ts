import { Akash } from "../../../../akash/akash";
import Client from "./client/client";

export default class Create {
  public readonly client: Client;

  constructor (akash: Akash) {
    this.client = new Client(akash);
  }
}