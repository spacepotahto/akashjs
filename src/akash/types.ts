import { StdFee } from "@cosmjs/stargate";

export interface TxParams {
  memo?: string,
  fee?: StdFee
}