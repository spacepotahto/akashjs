import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageResponse, PageRequest } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "../../../akash/audit/v1beta1/audit";
export declare const protobufPackage = "akash.audit.v1beta1";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination?: PageResponse;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    auditor: string;
    owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
    pagination?: PageRequest;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
    owner: string;
    pagination?: PageRequest;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
    auditor: string;
    owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
    auditor: string;
    pagination?: PageRequest;
}
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
export declare const QueryAllProvidersAttributesRequest: {
    encode(message: QueryAllProvidersAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAllProvidersAttributesRequest;
    fromJSON(object: any): QueryAllProvidersAttributesRequest;
    toJSON(message: QueryAllProvidersAttributesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest;
};
export declare const QueryProviderAttributesRequest: {
    encode(message: QueryProviderAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProviderAttributesRequest;
    fromJSON(object: any): QueryProviderAttributesRequest;
    toJSON(message: QueryProviderAttributesRequest): unknown;
    fromPartial(object: DeepPartial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest;
};
export declare const QueryProviderAuditorRequest: {
    encode(message: QueryProviderAuditorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProviderAuditorRequest;
    fromJSON(object: any): QueryProviderAuditorRequest;
    toJSON(message: QueryProviderAuditorRequest): unknown;
    fromPartial(object: DeepPartial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest;
};
export declare const QueryAuditorAttributesRequest: {
    encode(message: QueryAuditorAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAuditorAttributesRequest;
    fromJSON(object: any): QueryAuditorAttributesRequest;
    toJSON(message: QueryAuditorAttributesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest;
};
/** Query defines the gRPC querier service */
export interface Query {
    /**
     * AllProvidersAttributes queries all providers
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    AllProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
    /**
     * ProviderAttributes queries all provider signed attributes
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
    /**
     * ProviderAuditorAttributes queries provider signed attributes by specific auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
    /**
     * AuditorAttributes queries all providers signed by this auditor
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    AllProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
    ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
    ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
    AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
