"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Account = exports.AccountID = exports.payment_StateToJSON = exports.payment_StateFromJSON = exports.Payment_State = exports.account_StateToJSON = exports.account_StateFromJSON = exports.Account_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "akash.escrow.v1beta1";
/** State stores state for an escrow account */
var Account_State;
(function (Account_State) {
    /** invalid - AccountStateInvalid is an invalid state */
    Account_State[Account_State["invalid"] = 0] = "invalid";
    /** open - AccountOpen is the state when an account is open */
    Account_State[Account_State["open"] = 1] = "open";
    /** closed - AccountClosed is the state when an account is closed */
    Account_State[Account_State["closed"] = 2] = "closed";
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    Account_State[Account_State["overdrawn"] = 3] = "overdrawn";
    Account_State[Account_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Account_State = exports.Account_State || (exports.Account_State = {}));
function account_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Account_State.invalid;
        case 1:
        case "open":
            return Account_State.open;
        case 2:
        case "closed":
            return Account_State.closed;
        case 3:
        case "overdrawn":
            return Account_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Account_State.UNRECOGNIZED;
    }
}
exports.account_StateFromJSON = account_StateFromJSON;
function account_StateToJSON(object) {
    switch (object) {
        case Account_State.invalid:
            return "invalid";
        case Account_State.open:
            return "open";
        case Account_State.closed:
            return "closed";
        case Account_State.overdrawn:
            return "overdrawn";
        default:
            return "UNKNOWN";
    }
}
exports.account_StateToJSON = account_StateToJSON;
/** Payment State */
var Payment_State;
(function (Payment_State) {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    Payment_State[Payment_State["invalid"] = 0] = "invalid";
    /** open - PaymentStateOpen is the state when the payment is open */
    Payment_State[Payment_State["open"] = 1] = "open";
    /** closed - PaymentStateClosed is the state when the payment is closed */
    Payment_State[Payment_State["closed"] = 2] = "closed";
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    Payment_State[Payment_State["overdrawn"] = 3] = "overdrawn";
    Payment_State[Payment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Payment_State = exports.Payment_State || (exports.Payment_State = {}));
function payment_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Payment_State.invalid;
        case 1:
        case "open":
            return Payment_State.open;
        case 2:
        case "closed":
            return Payment_State.closed;
        case 3:
        case "overdrawn":
            return Payment_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Payment_State.UNRECOGNIZED;
    }
}
exports.payment_StateFromJSON = payment_StateFromJSON;
function payment_StateToJSON(object) {
    switch (object) {
        case Payment_State.invalid:
            return "invalid";
        case Payment_State.open:
            return "open";
        case Payment_State.closed:
            return "closed";
        case Payment_State.overdrawn:
            return "overdrawn";
        default:
            return "UNKNOWN";
    }
}
exports.payment_StateToJSON = payment_StateToJSON;
const baseAccountID = { scope: "", xid: "" };
exports.AccountID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccountID);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.xid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAccountID);
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = String(object.scope);
        }
        else {
            message.scope = "";
        }
        if (object.xid !== undefined && object.xid !== null) {
            message.xid = String(object.xid);
        }
        else {
            message.xid = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined && (obj.scope = message.scope);
        message.xid !== undefined && (obj.xid = message.xid);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAccountID);
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = object.scope;
        }
        else {
            message.scope = "";
        }
        if (object.xid !== undefined && object.xid !== null) {
            message.xid = object.xid;
        }
        else {
            message.xid = "";
        }
        return message;
    },
};
const baseAccount = { owner: "", state: 0, settledAt: long_1.default.ZERO };
exports.Account = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
        }
        if (message.transferred !== undefined) {
            coin_1.Coin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
        }
        if (!message.settledAt.isZero()) {
            writer.uint32(48).int64(message.settledAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.AccountID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.transferred = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.settledAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAccount);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.AccountID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = account_StateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromJSON(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.transferred !== undefined && object.transferred !== null) {
            message.transferred = coin_1.Coin.fromJSON(object.transferred);
        }
        else {
            message.transferred = undefined;
        }
        if (object.settledAt !== undefined && object.settledAt !== null) {
            message.settledAt = long_1.default.fromString(object.settledAt);
        }
        else {
            message.settledAt = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.AccountID.toJSON(message.id) : undefined);
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined &&
            (obj.state = account_StateToJSON(message.state));
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? coin_1.Coin.toJSON(message.balance)
                : undefined);
        message.transferred !== undefined &&
            (obj.transferred = message.transferred
                ? coin_1.Coin.toJSON(message.transferred)
                : undefined);
        message.settledAt !== undefined &&
            (obj.settledAt = (message.settledAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAccount);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.AccountID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromPartial(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.transferred !== undefined && object.transferred !== null) {
            message.transferred = coin_1.Coin.fromPartial(object.transferred);
        }
        else {
            message.transferred = undefined;
        }
        if (object.settledAt !== undefined && object.settledAt !== null) {
            message.settledAt = object.settledAt;
        }
        else {
            message.settledAt = long_1.default.ZERO;
        }
        return message;
    },
};
const basePayment = { paymentId: "", owner: "", state: 0 };
exports.Payment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountId !== undefined) {
            exports.AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentId !== "") {
            writer.uint32(18).string(message.paymentId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.rate !== undefined) {
            coin_1.Coin.encode(message.rate, writer.uint32(42).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.withdrawn !== undefined) {
            coin_1.Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePayment);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = exports.AccountID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.paymentId = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.rate = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.withdrawn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePayment);
        if (object.accountId !== undefined && object.accountId !== null) {
            message.accountId = exports.AccountID.fromJSON(object.accountId);
        }
        else {
            message.accountId = undefined;
        }
        if (object.paymentId !== undefined && object.paymentId !== null) {
            message.paymentId = String(object.paymentId);
        }
        else {
            message.paymentId = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = payment_StateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = coin_1.Coin.fromJSON(object.rate);
        }
        else {
            message.rate = undefined;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromJSON(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.withdrawn !== undefined && object.withdrawn !== null) {
            message.withdrawn = coin_1.Coin.fromJSON(object.withdrawn);
        }
        else {
            message.withdrawn = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined &&
            (obj.accountId = message.accountId
                ? exports.AccountID.toJSON(message.accountId)
                : undefined);
        message.paymentId !== undefined && (obj.paymentId = message.paymentId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined &&
            (obj.state = payment_StateToJSON(message.state));
        message.rate !== undefined &&
            (obj.rate = message.rate ? coin_1.Coin.toJSON(message.rate) : undefined);
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? coin_1.Coin.toJSON(message.balance)
                : undefined);
        message.withdrawn !== undefined &&
            (obj.withdrawn = message.withdrawn
                ? coin_1.Coin.toJSON(message.withdrawn)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePayment);
        if (object.accountId !== undefined && object.accountId !== null) {
            message.accountId = exports.AccountID.fromPartial(object.accountId);
        }
        else {
            message.accountId = undefined;
        }
        if (object.paymentId !== undefined && object.paymentId !== null) {
            message.paymentId = object.paymentId;
        }
        else {
            message.paymentId = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = coin_1.Coin.fromPartial(object.rate);
        }
        else {
            message.rate = undefined;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromPartial(object.balance);
        }
        else {
            message.balance = undefined;
        }
        if (object.withdrawn !== undefined && object.withdrawn !== null) {
            message.withdrawn = coin_1.Coin.fromPartial(object.withdrawn);
        }
        else {
            message.withdrawn = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=types.js.map