import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "akash.escrow.v1beta1";
/** AccountID is the account identifier */
export interface AccountID {
    scope: string;
    xid: string;
}
/** Account stores state for an escrow account */
export interface Account {
    id?: AccountID;
    owner: string;
    state: Account_State;
    balance?: Coin;
    transferred?: Coin;
    settledAt: Long;
}
/** State stores state for an escrow account */
export declare enum Account_State {
    /** invalid - AccountStateInvalid is an invalid state */
    invalid = 0,
    /** open - AccountOpen is the state when an account is open */
    open = 1,
    /** closed - AccountClosed is the state when an account is closed */
    closed = 2,
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function account_StateFromJSON(object: any): Account_State;
export declare function account_StateToJSON(object: Account_State): string;
/** Payment stores state for a payment */
export interface Payment {
    accountId?: AccountID;
    paymentId: string;
    owner: string;
    state: Payment_State;
    rate?: Coin;
    balance?: Coin;
    withdrawn?: Coin;
}
/** Payment State */
export declare enum Payment_State {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    invalid = 0,
    /** open - PaymentStateOpen is the state when the payment is open */
    open = 1,
    /** closed - PaymentStateClosed is the state when the payment is closed */
    closed = 2,
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function payment_StateFromJSON(object: any): Payment_State;
export declare function payment_StateToJSON(object: Payment_State): string;
export declare const AccountID: {
    encode(message: AccountID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccountID;
    fromJSON(object: any): AccountID;
    toJSON(message: AccountID): unknown;
    fromPartial(object: DeepPartial<AccountID>): AccountID;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    fromPartial(object: DeepPartial<Account>): Account;
};
export declare const Payment: {
    encode(message: Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Payment;
    fromJSON(object: any): Payment;
    toJSON(message: Payment): unknown;
    fromPartial(object: DeepPartial<Payment>): Payment;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
