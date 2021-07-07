import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgCreateCertificate,
  MsgRevokeCertificate
} from "../codec/akash/cert/v1beta1/cert";
import { MsgCreateDeployment } from "../codec/akash/deployment/v1beta1/deployment";

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