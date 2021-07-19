import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../codec/akash/deployment/v1beta1/group";
import { MsgCreateCertificate, MsgRevokeCertificate } from "../codec/akash/cert/v1beta1/cert";
import { MsgCreateDeployment, MsgCloseDeployment, MsgDepositDeployment, MsgUpdateDeployment } from "../codec/akash/deployment/v1beta1/deployment";
import { MsgCreateLease } from "../codec/akash/market/v1beta1/lease";
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
    readonly typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment";
    readonly value: MsgDepositDeployment;
}
export interface MsgUpdateDeploymentEncodeObject extends EncodeObject {
    readonly typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment";
    readonly value: MsgUpdateDeployment;
}
export interface MsgCloseGroupEncodeObject extends EncodeObject {
    readonly typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup";
    readonly value: MsgCloseGroup;
}
export interface MsgPauseGroupEncodeObject extends EncodeObject {
    readonly typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup";
    readonly value: MsgPauseGroup;
}
export interface MsgStartGroupEncodeObject extends EncodeObject {
    readonly typeUrl: "/akash.deployment.v1beta1.MsgStartGroup";
    readonly value: MsgStartGroup;
}
export interface MsgCreateLeaseEncodeObject extends EncodeObject {
    readonly typeUrl: "/akash.market.v1beta1.MsgCreateLease";
    readonly value: MsgCreateLease;
}
