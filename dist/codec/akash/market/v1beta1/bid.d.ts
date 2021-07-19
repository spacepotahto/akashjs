import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderID } from "../../../akash/market/v1beta1/order";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "akash.market.v1beta1";
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
    order?: OrderID;
    provider: string;
    price?: Coin;
    deposit?: Coin;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
    bidId?: BidID;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
    bidId?: BidID;
    state: Bid_State;
    price?: Coin;
    createdAt: Long;
}
/** State is an enum which refers to state of bid */
export declare enum Bid_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - BidOpen denotes state for bid open */
    open = 1,
    /** active - BidMatched denotes state for bid open */
    active = 2,
    /** lost - BidLost denotes state for bid lost */
    lost = 3,
    /** closed - BidClosed denotes state for bid closed */
    closed = 4,
    UNRECOGNIZED = -1
}
export declare function bid_StateFromJSON(object: any): Bid_State;
export declare function bid_StateToJSON(object: Bid_State): string;
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export declare const MsgCreateBid: {
    encode(message: MsgCreateBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateBid;
    fromJSON(object: any): MsgCreateBid;
    toJSON(message: MsgCreateBid): unknown;
    fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid;
};
export declare const MsgCreateBidResponse: {
    encode(_: MsgCreateBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateBidResponse;
    fromJSON(_: any): MsgCreateBidResponse;
    toJSON(_: MsgCreateBidResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse;
};
export declare const MsgCloseBid: {
    encode(message: MsgCloseBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCloseBid;
    fromJSON(object: any): MsgCloseBid;
    toJSON(message: MsgCloseBid): unknown;
    fromPartial(object: DeepPartial<MsgCloseBid>): MsgCloseBid;
};
export declare const MsgCloseBidResponse: {
    encode(_: MsgCloseBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCloseBidResponse;
    fromJSON(_: any): MsgCloseBidResponse;
    toJSON(_: MsgCloseBidResponse): unknown;
    fromPartial(_: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse;
};
export declare const BidID: {
    encode(message: BidID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BidID;
    fromJSON(object: any): BidID;
    toJSON(message: BidID): unknown;
    fromPartial(object: DeepPartial<BidID>): BidID;
};
export declare const Bid: {
    encode(message: Bid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Bid;
    fromJSON(object: any): Bid;
    toJSON(message: Bid): unknown;
    fromPartial(object: DeepPartial<Bid>): Bid;
};
export declare const BidFilters: {
    encode(message: BidFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BidFilters;
    fromJSON(object: any): BidFilters;
    toJSON(message: BidFilters): unknown;
    fromPartial(object: DeepPartial<BidFilters>): BidFilters;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
