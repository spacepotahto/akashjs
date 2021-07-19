"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFilters = exports.Order = exports.OrderID = exports.order_StateToJSON = exports.order_StateFromJSON = exports.Order_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const group_1 = require("../../../akash/deployment/v1beta1/group");
exports.protobufPackage = "akash.market.v1beta1";
/** State is an enum which refers to state of order */
var Order_State;
(function (Order_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Order_State[Order_State["invalid"] = 0] = "invalid";
    /** open - OrderOpen denotes state for order open */
    Order_State[Order_State["open"] = 1] = "open";
    /** active - OrderMatched denotes state for order matched */
    Order_State[Order_State["active"] = 2] = "active";
    /** closed - OrderClosed denotes state for order lost */
    Order_State[Order_State["closed"] = 3] = "closed";
    Order_State[Order_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_State = exports.Order_State || (exports.Order_State = {}));
function order_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Order_State.invalid;
        case 1:
        case "open":
            return Order_State.open;
        case 2:
        case "active":
            return Order_State.active;
        case 3:
        case "closed":
            return Order_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order_State.UNRECOGNIZED;
    }
}
exports.order_StateFromJSON = order_StateFromJSON;
function order_StateToJSON(object) {
    switch (object) {
        case Order_State.invalid:
            return "invalid";
        case Order_State.open:
            return "open";
        case Order_State.active:
            return "active";
        case Order_State.closed:
            return "closed";
        default:
            return "UNKNOWN";
    }
}
exports.order_StateToJSON = order_StateToJSON;
const baseOrderID = { owner: "", dseq: long_1.default.UZERO, gseq: 0, oseq: 0 };
exports.OrderID = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOrderID);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOrderID);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.dseq !== undefined &&
            (obj.dseq = (message.dseq || long_1.default.UZERO).toString());
        message.gseq !== undefined && (obj.gseq = message.gseq);
        message.oseq !== undefined && (obj.oseq = message.oseq);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseOrderID);
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
        return message;
    },
};
const baseOrder = { state: 0, createdAt: long_1.default.ZERO };
exports.Order = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderId !== undefined) {
            exports.OrderID.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.spec !== undefined) {
            group_1.GroupSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOrder);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = exports.OrderID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.spec = group_1.GroupSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseOrder);
        if (object.orderId !== undefined && object.orderId !== null) {
            message.orderId = exports.OrderID.fromJSON(object.orderId);
        }
        else {
            message.orderId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = order_StateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = group_1.GroupSpec.fromJSON(object.spec);
        }
        else {
            message.spec = undefined;
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
        message.orderId !== undefined &&
            (obj.orderId = message.orderId
                ? exports.OrderID.toJSON(message.orderId)
                : undefined);
        message.state !== undefined &&
            (obj.state = order_StateToJSON(message.state));
        message.spec !== undefined &&
            (obj.spec = message.spec ? group_1.GroupSpec.toJSON(message.spec) : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = (message.createdAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseOrder);
        if (object.orderId !== undefined && object.orderId !== null) {
            message.orderId = exports.OrderID.fromPartial(object.orderId);
        }
        else {
            message.orderId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = group_1.GroupSpec.fromPartial(object.spec);
        }
        else {
            message.spec = undefined;
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
const baseOrderFilters = {
    owner: "",
    dseq: long_1.default.UZERO,
    gseq: 0,
    oseq: 0,
    state: "",
};
exports.OrderFilters = {
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
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOrderFilters);
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
        const message = Object.assign({}, baseOrderFilters);
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
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseOrderFilters);
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
//# sourceMappingURL=order.js.map