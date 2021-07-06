import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgCreateDeployment } from "../codec/akash/deployment/v1beta1/deployment";

export interface MsgCreateDeploymentEncodeObject extends EncodeObject {
  readonly typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment";
  readonly value: MsgCreateDeployment;
}