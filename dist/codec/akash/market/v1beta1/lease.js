"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCloseLeaseResponse = exports.MsgCloseLease = exports.MsgWithdrawLeaseResponse = exports.MsgWithdrawLease = exports.MsgCreateLeaseResponse = exports.MsgCreateLease = exports.LeaseFilters = exports.Lease = exports.LeaseID = exports.lease_StateToJSON = exports.lease_StateFromJSON = exports.Lease_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const bid_1 = require("../../../akash/market/v1beta1/bid");
exports.protobufPackage = "akash.market.v1beta1";
/** State is an enum which refers to state of lease */
var Lease_State;
(function (Lease_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Lease_State[Lease_State["invalid"] = 0] = "invalid";
    /** active - LeaseActive denotes state for lease active */
    Lease_State[Lease_State["active"] = 1] = "active";
    /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
    Lease_State[Lease_State["insufficient_funds"] = 2] = "insufficient_funds";
    /** closed - LeaseClosed denotes state for lease closed */
    Lease_State[Lease_State["closed"] = 3] = "closed";
    Lease_State[Lease_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Lease_State = exports.Lease_State || (exports.Lease_State = {}));
function lease_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Lease_State.invalid;
        case 1:
        case "active":
            return Lease_State.active;
        case 2:
        case "insufficient_funds":
            return Lease_State.insufficient_funds;
        case 3:
        case "closed":
            return Lease_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Lease_State.UNRECOGNIZED;
    }
}
exports.lease_StateFromJSON = lease_StateFromJSON;
function lease_StateToJSON(object) {
    switch (object) {
        case Lease_State.invalid:
            return "invalid";
        case Lease_State.active:
            return "active";
        case Lease_State.insufficient_funds:
            return "insufficient_funds";
        case Lease_State.closed:
            return "closed";
        default:
            return "UNKNOWN";
    }
}
exports.lease_StateToJSON = lease_StateToJSON;
const baseLeaseID = {
    owner: "",
    dseq: long_1.default.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
};
exports.LeaseID = {
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
        const message = Object.assign({}, baseLeaseID);
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
        const message = Object.assign({}, baseLeaseID);
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
        const message = Object.assign({}, baseLeaseID);
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
const baseLease = { state: 0, createdAt: long_1.default.ZERO };
exports.Lease = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            exports.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
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
        const message = Object.assign({}, baseLease);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaseId = exports.LeaseID.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseLease);
        if (object.leaseId !== undefined && object.leaseId !== null) {
            message.leaseId = exports.LeaseID.fromJSON(object.leaseId);
        }
        else {
            message.leaseId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = lease_StateFromJSON(object.state);
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
        message.leaseId !== undefined &&
            (obj.leaseId = message.leaseId
                ? exports.LeaseID.toJSON(message.leaseId)
                : undefined);
        message.state !== undefined &&
            (obj.state = lease_StateToJSON(message.state));
        message.price !== undefined &&
            (obj.price = message.price ? coin_1.Coin.toJSON(message.price) : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = (message.createdAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLease);
        if (object.leaseId !== undefined && object.leaseId !== null) {
            message.leaseId = exports.LeaseID.fromPartial(object.leaseId);
        }
        else {
            message.leaseId = undefined;
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
const baseLeaseFilters = {
    owner: "",
    dseq: long_1.default.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: "",
};
exports.LeaseFilters = {
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
        const message = Object.assign({}, baseLeaseFilters);
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
        const message = Object.assign({}, baseLeaseFilters);
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
        const message = Object.assign({}, baseLeaseFilters);
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
const baseMsgCreateLease = {};
exports.MsgCreateLease = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            bid_1.BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateLease);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = bid_1.BidID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateLease);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = bid_1.BidID.fromJSON(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bidId !== undefined &&
            (obj.bidId = message.bidId ? bid_1.BidID.toJSON(message.bidId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateLease);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = bid_1.BidID.fromPartial(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        return message;
    },
};
const baseMsgCreateLeaseResponse = {};
exports.MsgCreateLeaseResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateLeaseResponse);
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
        const message = Object.assign({}, baseMsgCreateLeaseResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateLeaseResponse);
        return message;
    },
};
const baseMsgWithdrawLease = {};
exports.MsgWithdrawLease = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            exports.LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgWithdrawLease);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = exports.LeaseID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgWithdrawLease);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = exports.LeaseID.fromJSON(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bidId !== undefined &&
            (obj.bidId = message.bidId ? exports.LeaseID.toJSON(message.bidId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgWithdrawLease);
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = exports.LeaseID.fromPartial(object.bidId);
        }
        else {
            message.bidId = undefined;
        }
        return message;
    },
};
const baseMsgWithdrawLeaseResponse = {};
exports.MsgWithdrawLeaseResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgWithdrawLeaseResponse);
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
        const message = Object.assign({}, baseMsgWithdrawLeaseResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgWithdrawLeaseResponse);
        return message;
    },
};
const baseMsgCloseLease = {};
exports.MsgCloseLease = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            exports.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseLease);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaseId = exports.LeaseID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCloseLease);
        if (object.leaseId !== undefined && object.leaseId !== null) {
            message.leaseId = exports.LeaseID.fromJSON(object.leaseId);
        }
        else {
            message.leaseId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.leaseId !== undefined &&
            (obj.leaseId = message.leaseId
                ? exports.LeaseID.toJSON(message.leaseId)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCloseLease);
        if (object.leaseId !== undefined && object.leaseId !== null) {
            message.leaseId = exports.LeaseID.fromPartial(object.leaseId);
        }
        else {
            message.leaseId = undefined;
        }
        return message;
    },
};
const baseMsgCloseLeaseResponse = {};
exports.MsgCloseLeaseResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseLeaseResponse);
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
        const message = Object.assign({}, baseMsgCloseLeaseResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCloseLeaseResponse);
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=lease.js.map