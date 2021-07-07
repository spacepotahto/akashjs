import { Akash } from "../akash";
import Cert from "./cert/cert";

export default class Tx {
  public readonly cert: Cert;

  constructor(akash: Akash) {
    this.cert = new Cert(akash);
  }
}