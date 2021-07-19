import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderFilters, OrderID, Order } from "../../../akash/market/v1beta1/order";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidID, Bid } from "../../../akash/market/v1beta1/bid";
import { Account, Payment } from "../../../akash/escrow/v1beta1/types";
import { LeaseFilters, LeaseID, Lease } from "../../../akash/market/v1beta1/lease";
export declare const protobufPackage = "akash.market.v1beta1";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
    filters?: OrderFilters;
    pagination?: PageRequest;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
    orders: Order[];
    pagination?: PageResponse;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
    id?: OrderID;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
    order?: Order;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
    filters?: BidFilters;
    pagination?: PageRequest;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
    bids: QueryBidResponse[];
    pagination?: PageResponse;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
    id?: BidID;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
    bid?: Bid;
    escrowAccount?: Account;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
    filters?: LeaseFilters;
    pagination?: PageRequest;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
    leases: QueryLeaseResponse[];
    pagination?: PageResponse;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
    id?: LeaseID;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
    lease?: Lease;
    escrowPayment?: Payment;
}
export declare const QueryOrdersRequest: {
    encode(message: QueryOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrdersRequest;
    fromJSON(object: any): QueryOrdersRequest;
    toJSON(message: QueryOrdersRequest): unknown;
    fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest;
};
export declare const QueryOrdersResponse: {
    encode(message: QueryOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrdersResponse;
    fromJSON(object: any): QueryOrdersResponse;
    toJSON(message: QueryOrdersResponse): unknown;
    fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse;
};
export declare const QueryOrderRequest: {
    encode(message: QueryOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrderRequest;
    fromJSON(object: any): QueryOrderRequest;
    toJSON(message: QueryOrderRequest): unknown;
    fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest;
};
export declare const QueryOrderResponse: {
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrderResponse;
    fromJSON(object: any): QueryOrderResponse;
    toJSON(message: QueryOrderResponse): unknown;
    fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse;
};
export declare const QueryBidsRequest: {
    encode(message: QueryBidsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidsRequest;
    fromJSON(object: any): QueryBidsRequest;
    toJSON(message: QueryBidsRequest): unknown;
    fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest;
};
export declare const QueryBidsResponse: {
    encode(message: QueryBidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidsResponse;
    fromJSON(object: any): QueryBidsResponse;
    toJSON(message: QueryBidsResponse): unknown;
    fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse;
};
export declare const QueryBidRequest: {
    encode(message: QueryBidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidRequest;
    fromJSON(object: any): QueryBidRequest;
    toJSON(message: QueryBidRequest): unknown;
    fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest;
};
export declare const QueryBidResponse: {
    encode(message: QueryBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidResponse;
    fromJSON(object: any): QueryBidResponse;
    toJSON(message: QueryBidResponse): unknown;
    fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse;
};
export declare const QueryLeasesRequest: {
    encode(message: QueryLeasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeasesRequest;
    fromJSON(object: any): QueryLeasesRequest;
    toJSON(message: QueryLeasesRequest): unknown;
    fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest;
};
export declare const QueryLeasesResponse: {
    encode(message: QueryLeasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeasesResponse;
    fromJSON(object: any): QueryLeasesResponse;
    toJSON(message: QueryLeasesResponse): unknown;
    fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse;
};
export declare const QueryLeaseRequest: {
    encode(message: QueryLeaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeaseRequest;
    fromJSON(object: any): QueryLeaseRequest;
    toJSON(message: QueryLeaseRequest): unknown;
    fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest;
};
export declare const QueryLeaseResponse: {
    encode(message: QueryLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeaseResponse;
    fromJSON(object: any): QueryLeaseResponse;
    toJSON(message: QueryLeaseResponse): unknown;
    fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Orders queries orders with filters */
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    /** Order queries order details */
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    /** Bids queries bids with filters */
    Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    /** Bid queries bid details */
    Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    /** Leases queries leases with filters */
    Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    /** Lease queries lease details */
    Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
