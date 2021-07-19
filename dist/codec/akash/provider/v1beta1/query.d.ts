import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "../../../akash/provider/v1beta1/provider";
export declare const protobufPackage = "akash.provider.v1beta1";
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
    pagination?: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination?: PageResponse;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    owner: string;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
    provider?: Provider;
}
export declare const QueryProvidersRequest: {
    encode(message: QueryProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProvidersRequest;
    fromJSON(object: any): QueryProvidersRequest;
    toJSON(message: QueryProvidersRequest): unknown;
    fromPartial(object: DeepPartial<QueryProvidersRequest>): QueryProvidersRequest;
};
export declare const QueryProvidersResponse: {
    encode(message: QueryProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProvidersResponse;
    fromJSON(object: any): QueryProvidersResponse;
    toJSON(message: QueryProvidersResponse): unknown;
    fromPartial(object: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse;
};
export declare const QueryProviderRequest: {
    encode(message: QueryProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProviderRequest;
    fromJSON(object: any): QueryProviderRequest;
    toJSON(message: QueryProviderRequest): unknown;
    fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest;
};
export declare const QueryProviderResponse: {
    encode(message: QueryProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProviderResponse;
    fromJSON(object: any): QueryProviderResponse;
    toJSON(message: QueryProviderResponse): unknown;
    fromPartial(object: DeepPartial<QueryProviderResponse>): QueryProviderResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Providers queries providers */
    Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    /** Provider queries provider details */
    Provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    Provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
