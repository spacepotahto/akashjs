import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "akash.base.v1beta1";
/** Attribute represents key value pair */
export interface Attribute {
    key: string;
    value: string;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBy {
    /** all_of all keys in this list must have signed attributes */
    allOf: string[];
    /** any_of at least of of the keys from the list must have signed attributes */
    anyOf: string[];
}
/** PlacementRequirements */
export interface PlacementRequirements {
    /** SignedBy list of keys that tenants expect to have signatures from */
    signedBy?: SignedBy;
    /** Attribute list of attributes tenant expects from the provider */
    attributes: Attribute[];
}
export declare const Attribute: {
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    fromPartial(object: DeepPartial<Attribute>): Attribute;
};
export declare const SignedBy: {
    encode(message: SignedBy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedBy;
    fromJSON(object: any): SignedBy;
    toJSON(message: SignedBy): unknown;
    fromPartial(object: DeepPartial<SignedBy>): SignedBy;
};
export declare const PlacementRequirements: {
    encode(message: PlacementRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementRequirements;
    fromJSON(object: any): PlacementRequirements;
    toJSON(message: PlacementRequirements): unknown;
    fromPartial(object: DeepPartial<PlacementRequirements>): PlacementRequirements;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
