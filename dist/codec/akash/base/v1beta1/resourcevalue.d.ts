import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "akash.base.v1beta1";
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValue {
    val: Uint8Array;
}
export declare const ResourceValue: {
    encode(message: ResourceValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceValue;
    fromJSON(object: any): ResourceValue;
    toJSON(message: ResourceValue): unknown;
    fromPartial(object: DeepPartial<ResourceValue>): ResourceValue;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
