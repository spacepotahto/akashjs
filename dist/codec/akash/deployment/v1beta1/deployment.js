"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.DeploymentFilters = exports.Deployment = exports.DeploymentID = exports.MsgCloseDeploymentResponse = exports.MsgCloseDeployment = exports.MsgUpdateDeploymentResponse = exports.MsgUpdateDeployment = exports.MsgDepositDeploymentResponse = exports.MsgDepositDeployment = exports.MsgCreateDeploymentResponse = exports.MsgCreateDeployment = exports.deployment_StateToJSON = exports.deployment_StateFromJSON = exports.Deployment_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const group_1 = require("../../../akash/deployment/v1beta1/group");
exports.protobufPackage = "akash.deployment.v1beta1";
/** State is an enum which refers to state of deployment */
var Deployment_State;
(function (Deployment_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Deployment_State[Deployment_State["invalid"] = 0] = "invalid";
    /** active - DeploymentActive denotes state for deployment active */
    Deployment_State[Deployment_State["active"] = 1] = "active";
    /** closed - DeploymentClosed denotes state for deployment closed */
    Deployment_State[Deployment_State["closed"] = 2] = "closed";
    Deployment_State[Deployment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Deployment_State = exports.Deployment_State || (exports.Deployment_State = {}));
function deployment_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Deployment_State.invalid;
        case 1:
        case "active":
            return Deployment_State.active;
        case 2:
        case "closed":
            return Deployment_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Deployment_State.UNRECOGNIZED;
    }
}
exports.deployment_StateFromJSON = deployment_StateFromJSON;
function deployment_StateToJSON(object) {
    switch (object) {
        case Deployment_State.invalid:
            return "invalid";
        case Deployment_State.active:
            return "active";
        case Deployment_State.closed:
            return "closed";
        default:
            return "UNKNOWN";
    }
}
exports.deployment_StateToJSON = deployment_StateToJSON;
const baseMsgCreateDeployment = {};
exports.MsgCreateDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDeployment);
        message.groups = [];
        message.version = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.GroupSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.version = reader.bytes();
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
        const message = Object.assign({}, baseMsgCreateDeployment);
        message.groups = [];
        message.version = new Uint8Array();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(group_1.GroupSpec.fromJSON(e));
            }
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = bytesFromBase64(object.version);
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
        message.id !== undefined &&
            (obj.id = message.id ? exports.DeploymentID.toJSON(message.id) : undefined);
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? group_1.GroupSpec.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.version !== undefined &&
            (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? coin_1.Coin.toJSON(message.deposit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDeployment);
        message.groups = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(group_1.GroupSpec.fromPartial(e));
            }
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = new Uint8Array();
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
const baseMsgCreateDeploymentResponse = {};
exports.MsgCreateDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDeploymentResponse);
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
        const message = Object.assign({}, baseMsgCreateDeploymentResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateDeploymentResponse);
        return message;
    },
};
const baseMsgDepositDeployment = {};
exports.MsgDepositDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDepositDeployment);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDepositDeployment);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.DeploymentID.toJSON(message.id) : undefined);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgDepositDeployment);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgDepositDeploymentResponse = {};
exports.MsgDepositDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDepositDeploymentResponse);
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
        const message = Object.assign({}, baseMsgDepositDeploymentResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDepositDeploymentResponse);
        return message;
    },
};
const baseMsgUpdateDeployment = {};
exports.MsgUpdateDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDeployment);
        message.groups = [];
        message.version = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.GroupSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.version = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateDeployment);
        message.groups = [];
        message.version = new Uint8Array();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(group_1.GroupSpec.fromJSON(e));
            }
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = bytesFromBase64(object.version);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.DeploymentID.toJSON(message.id) : undefined);
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? group_1.GroupSpec.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.version !== undefined &&
            (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateDeployment);
        message.groups = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(group_1.GroupSpec.fromPartial(e));
            }
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = new Uint8Array();
        }
        return message;
    },
};
const baseMsgUpdateDeploymentResponse = {};
exports.MsgUpdateDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateDeploymentResponse);
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
        const message = Object.assign({}, baseMsgUpdateDeploymentResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateDeploymentResponse);
        return message;
    },
};
const baseMsgCloseDeployment = {};
exports.MsgCloseDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseDeployment);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCloseDeployment);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.DeploymentID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCloseDeployment);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseMsgCloseDeploymentResponse = {};
exports.MsgCloseDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCloseDeploymentResponse);
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
        const message = Object.assign({}, baseMsgCloseDeploymentResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCloseDeploymentResponse);
        return message;
    },
};
const baseDeploymentID = { owner: "", dseq: long_1.default.UZERO };
exports.DeploymentID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.isZero()) {
            writer.uint32(16).uint64(message.dseq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeploymentID);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeploymentID);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.dseq !== undefined &&
            (obj.dseq = (message.dseq || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDeploymentID);
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
        return message;
    },
};
const baseDeployment = { state: 0, createdAt: long_1.default.ZERO };
exports.Deployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deploymentId !== undefined) {
            exports.DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeployment);
        message.version = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deploymentId = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.version = reader.bytes();
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
        const message = Object.assign({}, baseDeployment);
        message.version = new Uint8Array();
        if (object.deploymentId !== undefined && object.deploymentId !== null) {
            message.deploymentId = exports.DeploymentID.fromJSON(object.deploymentId);
        }
        else {
            message.deploymentId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = deployment_StateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = bytesFromBase64(object.version);
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
        message.deploymentId !== undefined &&
            (obj.deploymentId = message.deploymentId
                ? exports.DeploymentID.toJSON(message.deploymentId)
                : undefined);
        message.state !== undefined &&
            (obj.state = deployment_StateToJSON(message.state));
        message.version !== undefined &&
            (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
        message.createdAt !== undefined &&
            (obj.createdAt = (message.createdAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDeployment);
        if (object.deploymentId !== undefined && object.deploymentId !== null) {
            message.deploymentId = exports.DeploymentID.fromPartial(object.deploymentId);
        }
        else {
            message.deploymentId = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = new Uint8Array();
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
const baseDeploymentFilters = {
    owner: "",
    dseq: long_1.default.UZERO,
    state: "",
};
exports.DeploymentFilters = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.isZero()) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.state !== "") {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeploymentFilters);
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
        const message = Object.assign({}, baseDeploymentFilters);
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
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDeploymentFilters);
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
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = "";
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateDeployment = this.CreateDeployment.bind(this);
        this.DepositDeployment = this.DepositDeployment.bind(this);
        this.UpdateDeployment = this.UpdateDeployment.bind(this);
        this.CloseDeployment = this.CloseDeployment.bind(this);
        this.CloseGroup = this.CloseGroup.bind(this);
        this.PauseGroup = this.PauseGroup.bind(this);
        this.StartGroup = this.StartGroup.bind(this);
    }
    CreateDeployment(request) {
        const data = exports.MsgCreateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CreateDeployment", data);
        return promise.then((data) => exports.MsgCreateDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    DepositDeployment(request) {
        const data = exports.MsgDepositDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "DepositDeployment", data);
        return promise.then((data) => exports.MsgDepositDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateDeployment(request) {
        const data = exports.MsgUpdateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "UpdateDeployment", data);
        return promise.then((data) => exports.MsgUpdateDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    CloseDeployment(request) {
        const data = exports.MsgCloseDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseDeployment", data);
        return promise.then((data) => exports.MsgCloseDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    CloseGroup(request) {
        const data = group_1.MsgCloseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseGroup", data);
        return promise.then((data) => group_1.MsgCloseGroupResponse.decode(new minimal_1.default.Reader(data)));
    }
    PauseGroup(request) {
        const data = group_1.MsgPauseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "PauseGroup", data);
        return promise.then((data) => group_1.MsgPauseGroupResponse.decode(new minimal_1.default.Reader(data)));
    }
    StartGroup(request) {
        const data = group_1.MsgStartGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "StartGroup", data);
        return promise.then((data) => group_1.MsgStartGroupResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=deployment.js.map