import { Akash } from "src/akash/akash";
// import Create from "./create/create";
import Revoke from "./revoke/revoke";

export default class Cert {
  // public readonly create: Create;
  public readonly revoke: Revoke;

  constructor (akash: Akash) {
    // this.create = new Create(signingClient);
    this.revoke = new Revoke(akash);
  }
}