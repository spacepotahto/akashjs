import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgCreateCertificate,
  MsgRevokeCertificate
} from "../codec/akash/cert/v1beta1/cert";
import {
  MsgCreateDeployment,
  MsgCloseDeployment,
  MsgDepositDeployment
} from "../codec/akash/deployment/v1beta1/deployment";

export interface MsgCreateCertificateEncodeObject extends EncodeObject {
  readonly typeUrl: "/akash.cert.v1beta1.MsgCreateCertificate";
  readonly value: MsgCreateCertificate;
}

export interface MsgRevokeCertificateEncodeObject extends EncodeObject {
  readonly typeUrl: "/akash.cert.v1beta1.MsgRevokeCertificate";
  readonly value: MsgRevokeCertificate;
}

export interface MsgCreateDeploymentEncodeObject extends EncodeObject {
  readonly typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment";
  readonly value: MsgCreateDeployment;
}

export interface MsgCloseDeploymentEncodeObject extends EncodeObject {
  readonly typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment";
  readonly value: MsgCloseDeployment;
}

export interface MsgDepositDeploymentEncodeObject extends EncodeObject {
  readonly typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
  readonly value: MsgDepositDeployment;
}