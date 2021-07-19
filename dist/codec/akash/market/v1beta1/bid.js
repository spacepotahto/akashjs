"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidFilters = exports.Bid = exports.BidID = exports.MsgCloseBidResponse = exports.MsgCloseBid = exports.MsgCreateBidResponse = exports.MsgCreateBid = exports.bid_StateToJSON = exports.bid_StateFromJSON = exports.Bid_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const order_1 = require("../../../akash/market/v1beta1/order");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "akash.market.v1beta1";
/** State is an enum which refers to state of bid */
var Bid_State;
(function (Bid_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Bid_State[Bid_State["invalid"] = 0] = "invalid";
    /** open - BidOpen denotes state for bid open */
    Bid_State[Bid_State["open"] = 1] = "open";
    /** active - BidMatched denotes state for bid open */
    Bid_State[Bid_State["active"] = 2] = "active";
    /** lost - BidLost denotes state for bid lost */
    Bid_State[Bid_State["lost"] = 3] = "lost";
    /** closed - BidClosed denotes state for bid closed */
    Bid_State[Bid_State["closed"] = 4] = "closed";
    Bid_State[Bid_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Bid_State = exports.Bid_State || (exports.Bid_State = {}));
function bid_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Bid_State.invalid;
        case 1:
        case "open":
            return Bid_State.open;
        case 2:
        case "active":
            return Bid_State.active;
        case 3:
        case "lost":
            return Bid_State.lost;
        case 4:
        case "closed":
            return Bid_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Bid_State.UNRECOGNIZED;
    }
}
exports.bid_StateFromJSON = bid_StateFromJSON;
function bid_StateToJSON(object) {
    switch (object) {
        case Bid_State.invalid:
            return "invalid";
        case Bid_State.open:
            return "open";
        case Bid_State.active:
            return "active";
        case Bid_State.lost:
            return "lost";
        case Bid_State.closed:
            return "closed";
        default:
            return "UNKNOWN";
    }
}
exports.bid_StateToJSON = bid_StateToJSON;
const baseMsgCreateBid = { provider: "" };
exports.MsgCreateBid = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.order !== undefined) {
            order_1.OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        if (message.price !== undefined) {
            coin_1.Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateBid);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = order_1.OrderID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.provider = reader.string();
                    break;
                case 3:
                    message.price = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateBid);
        if (object.order !== undefined && object.order !== null) {
            message.order = order_1.OrderID.fromJSON(object.order);
        }
        else {
            message.order = undefined;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = String(object.provider);
        }
        else {
            message.provider = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromJSON(object.deposit);
        }
        else {
            message.deposit = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined &&
            (obj.order = message.order ? order_1.OrderID.toJSON(message.order) : undefined);
        message.provider !== undefined && (obj.provider = message.provider);
        message.price !== undefined &&
            (obj.price = message.price ? coin_1.Coin.toJSON(message.price) : undefined);
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? coin_1.Coin.toJSON(message.deposit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateBid);
        if (object.order !== undefined && object.order !== null) {
            message.order = order_1.OrderID.fromPartial(object.order);
        }
        else {
            message.order = undefined;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        else {
            message.provider = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromPartial(object.deposit);
        }
        else {
            message.deposit = undefined;
        }
        return message;
    },
};
const baseMsgCreateBidResponse = {};
exports.MsgCreateBidResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateBidResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgCreateBidResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateBidResponse);
        return message;
    },
};
const baseMsgCloseBid = {};
exports.MsgCloseBid = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            exports.BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseBid);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = exports.BidID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCloseBid);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = exports.BidID.fromJSON(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bidId !== undefined &&
            (obj.bidId = message.bidId ? exports.BidID.toJSON(message.bidId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCloseBid);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = exports.BidID.fromPartial(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        return message;
    },
};
const baseMsgCloseBidResponse = {};
exports.MsgCloseBidResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseBidResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgCloseBidResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCloseBidResponse);
        return message;
    },
};
const baseBidID = {
    owner: "",
    dseq: long_1.default.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
};
exports.BidID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.isZero()) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== "") {
            writer.uint32(42).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBidID);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.gseq = reader.uint32();
                    break;
                case 4:
                    message.oseq = reader.uint32();
                    break;
                case 5:
                    message.provider = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBidID);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = long_1.default.fromString(object.dseq);
        }
        else {
            message.dseq = long_1.default.UZERO;
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = Number(object.gseq);
        }
        else {
            message.gseq = 0;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = Number(object.oseq);
        }
        else {
            message.oseq = 0;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = String(object.provider);
        }
        else {
            message.provider = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.dseq !== undefined &&
            (obj.dseq = (message.dseq || long_1.default.UZERO).toString());
        message.gseq !== undefined && (obj.gseq = message.gseq);
        message.oseq !== undefined && (obj.oseq = message.oseq);
        message.provider !== undefined && (obj.provider = message.provider);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBidID);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = object.dseq;
        }
        else {
            message.dseq = long_1.default.UZERO;
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = object.gseq;
        }
        else {
            message.gseq = 0;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = object.oseq;
        }
        else {
            message.oseq = 0;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        else {
            message.provider = "";
        }
        return message;
    },
};
const baseBid = { state: 0, createdAt: long_1.default.ZERO };
exports.Bid = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            exports.BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.price !== undefined) {
            coin_1.Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBid);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = exports.BidID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.price = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBid);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = exports.BidID.fromJSON(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = bid_StateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = long_1.default.fromString(object.createdAt);
        }
        else {
            message.createdAt = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bidId !== undefined &&
            (obj.bidId = message.bidId ? exports.BidID.toJSON(message.bidId) : undefined);
        message.state !== undefined && (obj.state = bid_StateToJSON(message.state));
        message.price !== undefined &&
            (obj.price = message.price ? coin_1.Coin.toJSON(message.price) : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = (message.createdAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBid);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = exports.BidID.fromPartial(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = long_1.default.ZERO;
        }
        return message;
    },
};
const baseBidFilters = {
    owner: "",
    dseq: long_1.default.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: "",
};
exports.BidFilters = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.isZero()) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== "") {
            writer.uint32(42).string(message.provider);
        }
        if (message.state !== "") {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBidFilters);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.gseq = reader.uint32();
                    break;
                case 4:
                    message.oseq = reader.uint32();
                    break;
                case 5:
                    message.provider = reader.string();
                    break;
                case 6:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBidFilters);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = long_1.default.fromString(object.dseq);
        }
        else {
            message.dseq = long_1.default.UZERO;
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = Number(object.gseq);
        }
        else {
            message.gseq = 0;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = Number(object.oseq);
        }
        else {
            message.oseq = 0;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = String(object.provider);
        }
        else {
            message.provider = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        }
        else {
            message.state = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.dseq !== undefined &&
            (obj.dseq = (message.dseq || long_1.default.UZERO).toString());
        message.gseq !== undefined && (obj.gseq = message.gseq);
        message.oseq !== undefined && (obj.oseq = message.oseq);
        message.provider !== undefined && (obj.provider = message.provider);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBidFilters);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = object.dseq;
        }
        else {
            message.dseq = long_1.default.UZERO;
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = object.gseq;
        }
        else {
            message.gseq = 0;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = object.oseq;
        }
        else {
            message.oseq = 0;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        else {
            message.provider = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=bid.js.map