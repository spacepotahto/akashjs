import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";
export declare const protobufPackage = "akash.audit.v1beta1";
/** Provider stores owner auditor and attributes details */
export interface Provider {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** Attributes */
export interface AuditedAttributes {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
    attributes: AuditedAttributes[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
    auditors: string[];
    owners: string[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
    owner: string;
    auditor: string;
    keys: string[];
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {
}
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    fromPartial(object: DeepPartial<Provider>): Provider;
};
export declare const AuditedAttributes: {
    encode(message: AuditedAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuditedAttributes;
    fromJSON(object: any): AuditedAttributes;
    toJSON(message: AuditedAttributes): unknown;
    fromPartial(object: DeepPartial<AuditedAttributes>): AuditedAttributes;
};
export declare const AttributesResponse: {
    encode(message: AttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttributesResponse;
    fromJSON(object: any): AttributesResponse;
    toJSON(message: AttributesResponse): unknown;
    fromPartial(object: DeepPartial<AttributesResponse>): AttributesResponse;
};
export declare const AttributesFilters: {
    encode(message: AttributesFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttributesFilters;
    fromJSON(object: any): AttributesFilters;
    toJSON(message: AttributesFilters): unknown;
    fromPartial(object: DeepPartial<AttributesFilters>): AttributesFilters;
};
export declare const MsgSignProviderAttributes: {
    encode(message: MsgSignProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSignProviderAttributes;
    fromJSON(object: any): MsgSignProviderAttributes;
    toJSON(message: MsgSignProviderAttributes): unknown;
    fromPartial(object: DeepPartial<MsgSignProviderAttributes>): MsgSignProviderAttributes;
};
export declare const MsgSignProviderAttributesResponse: {
    encode(_: MsgSignProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSignProviderAttributesResponse;
    fromJSON(_: any): MsgSignProviderAttributesResponse;
    toJSON(_: MsgSignProviderAttributesResponse): unknown;
    fromPartial(_: DeepPartial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse;
};
export declare const MsgDeleteProviderAttributes: {
    encode(message: MsgDeleteProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteProviderAttributes;
    fromJSON(object: any): MsgDeleteProviderAttributes;
    toJSON(message: MsgDeleteProviderAttributes): unknown;
    fromPartial(object: DeepPartial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes;
};
export declare const MsgDeleteProviderAttributesResponse: {
    encode(_: MsgDeleteProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDeleteProviderAttributesResponse;
    fromJSON(_: any): MsgDeleteProviderAttributesResponse;
    toJSON(_: MsgDeleteProviderAttributesResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse;
};
/** Msg defines the provider Msg service */
export interface Msg {
    /** SignProviderAttributes defines a method that signs provider attributes */
    SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;
    /** DeleteProviderAttributes defines a method that deletes provider attributes */
    DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;
    DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
