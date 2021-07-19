import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, Payment } from "../../../akash/escrow/v1beta1/types";
export declare const protobufPackage = "akash.escrow.v1beta1";
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
    scope: string;
    xid: string;
    owner: string;
    state: string;
    pagination?: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
    accounts: Account[];
    pagination?: PageResponse;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
    scope: string;
    xid: string;
    id: string;
    owner: string;
    state: string;
    pagination?: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
    payments: Payment[];
    pagination?: PageResponse;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryPaymentsRequest: {
    encode(message: QueryPaymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPaymentsRequest;
    fromJSON(object: any): QueryPaymentsRequest;
    toJSON(message: QueryPaymentsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPaymentsRequest>): QueryPaymentsRequest;
};
export declare const QueryPaymentsResponse: {
    encode(message: QueryPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPaymentsResponse;
    fromJSON(object: any): QueryPaymentsResponse;
    toJSON(message: QueryPaymentsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPaymentsResponse>): QueryPaymentsResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
