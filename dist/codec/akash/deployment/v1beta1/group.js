"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.Group = exports.GroupSpec = exports.GroupID = exports.MsgStartGroupResponse = exports.MsgStartGroup = exports.MsgPauseGroupResponse = exports.MsgPauseGroup = exports.MsgCloseGroupResponse = exports.MsgCloseGroup = exports.group_StateToJSON = exports.group_StateFromJSON = exports.Group_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attribute_1 = require("../../../akash/base/v1beta1/attribute");
const resource_1 = require("../../../akash/base/v1beta1/resource");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "akash.deployment.v1beta1";
/** State is an enum which refers to state of group */
var Group_State;
(function (Group_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Group_State[Group_State["invalid"] = 0] = "invalid";
    /** open - GroupOpen denotes state for group open */
    Group_State[Group_State["open"] = 1] = "open";
    /** paused - GroupOrdered denotes state for group ordered */
    Group_State[Group_State["paused"] = 2] = "paused";
    /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
    Group_State[Group_State["insufficient_funds"] = 3] = "insufficient_funds";
    /** closed - GroupClosed denotes state for group closed */
    Group_State[Group_State["closed"] = 4] = "closed";
    Group_State[Group_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Group_State = exports.Group_State || (exports.Group_State = {}));
function group_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Group_State.invalid;
        case 1:
        case "open":
            return Group_State.open;
        case 2:
        case "paused":
            return Group_State.paused;
        case 3:
        case "insufficient_funds":
            return Group_State.insufficient_funds;
        case 4:
        case "closed":
            return Group_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Group_State.UNRECOGNIZED;
    }
}
exports.group_StateFromJSON = group_StateFromJSON;
function group_StateToJSON(object) {
    switch (object) {
        case Group_State.invalid:
            return "invalid";
        case Group_State.open:
            return "open";
        case Group_State.paused:
            return "paused";
        case Group_State.insufficient_funds:
            return "insufficient_funds";
        case Group_State.closed:
            return "closed";
        default:
            return "UNKNOWN";
    }
}
exports.group_StateToJSON = group_StateToJSON;
const baseMsgCloseGroup = {};
exports.MsgCloseGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseGroup);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCloseGroup);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.GroupID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.GroupID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCloseGroup);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.GroupID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseMsgCloseGroupResponse = {};
exports.MsgCloseGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseGroupResponse);
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
        const message = Object.assign({}, baseMsgCloseGroupResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCloseGroupResponse);
        return message;
    },
};
const baseMsgPauseGroup = {};
exports.MsgPauseGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgPauseGroup);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgPauseGroup);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.GroupID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.GroupID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgPauseGroup);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.GroupID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseMsgPauseGroupResponse = {};
exports.MsgPauseGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgPauseGroupResponse);
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
        const message = Object.assign({}, baseMsgPauseGroupResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgPauseGroupResponse);
        return message;
    },
};
const baseMsgStartGroup = {};
exports.MsgStartGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgStartGroup);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgStartGroup);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.GroupID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.GroupID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgStartGroup);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.GroupID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseMsgStartGroupResponse = {};
exports.MsgStartGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgStartGroupResponse);
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
        const message = Object.assign({}, baseMsgStartGroupResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgStartGroupResponse);
        return message;
    },
};
const baseGroupID = { owner: "", dseq: long_1.default.UZERO, gseq: 0 };
exports.GroupID = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGroupID);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGroupID);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.dseq !== undefined &&
            (obj.dseq = (message.dseq || long_1.default.UZERO).toString());
        message.gseq !== undefined && (obj.gseq = message.gseq);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGroupID);
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
        return message;
    },
};
const baseGroupSpec = { name: "" };
exports.GroupSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requirements !== undefined) {
            attribute_1.PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.resources) {
            exports.Resource.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGroupSpec);
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requirements = attribute_1.PlacementRequirements.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources.push(exports.Resource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGroupSpec);
        message.resources = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = attribute_1.PlacementRequirements.fromJSON(object.requirements);
        }
        else {
            message.requirements = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(exports.Resource.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? attribute_1.PlacementRequirements.toJSON(message.requirements)
                : undefined);
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? exports.Resource.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGroupSpec);
        message.resources = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = attribute_1.PlacementRequirements.fromPartial(object.requirements);
        }
        else {
            message.requirements = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(exports.Resource.fromPartial(e));
            }
        }
        return message;
    },
};
const baseGroup = { state: 0, createdAt: long_1.default.ZERO };
exports.Group = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== undefined) {
            exports.GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.groupSpec !== undefined) {
            exports.GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGroup);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = exports.GroupID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.groupSpec = exports.GroupSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseGroup);
        if (object.groupId !== undefined && object.groupId !== null) {
            message.groupId = exports.GroupID.fromJSON(object.groupId);
        }
        else {
            message.groupId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = group_StateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.groupSpec !== undefined && object.groupSpec !== null) {
            message.groupSpec = exports.GroupSpec.fromJSON(object.groupSpec);
        }
        else {
            message.groupSpec = undefined;
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
        message.groupId !== undefined &&
            (obj.groupId = message.groupId
                ? exports.GroupID.toJSON(message.groupId)
                : undefined);
        message.state !== undefined &&
            (obj.state = group_StateToJSON(message.state));
        message.groupSpec !== undefined &&
            (obj.groupSpec = message.groupSpec
                ? exports.GroupSpec.toJSON(message.groupSpec)
                : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = (message.createdAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGroup);
        if (object.groupId !== undefined && object.groupId !== null) {
            message.groupId = exports.GroupID.fromPartial(object.groupId);
        }
        else {
            message.groupId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.groupSpec !== undefined && object.groupSpec !== null) {
            message.groupSpec = exports.GroupSpec.fromPartial(object.groupSpec);
        }
        else {
            message.groupSpec = undefined;
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
const baseResource = { count: 0 };
exports.Resource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            resource_1.ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        if (message.price !== undefined) {
            coin_1.Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResource);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = resource_1.ResourceUnits.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                case 3:
                    message.price = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResource);
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = resource_1.ResourceUnits.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? resource_1.ResourceUnits.toJSON(message.resources)
                : undefined);
        message.count !== undefined && (obj.count = message.count);
        message.price !== undefined &&
            (obj.price = message.price ? coin_1.Coin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResource);
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = resource_1.ResourceUnits.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=group.js.map