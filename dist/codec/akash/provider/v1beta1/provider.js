"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.Provider = exports.MsgDeleteProviderResponse = exports.MsgDeleteProvider = exports.MsgUpdateProviderResponse = exports.MsgUpdateProvider = exports.MsgCreateProviderResponse = exports.MsgCreateProvider = exports.ProviderInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attribute_1 = require("../../../akash/base/v1beta1/attribute");
exports.protobufPackage = "akash.provider.v1beta1";
const baseProviderInfo = { email: "", website: "" };
exports.ProviderInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.website !== "") {
            writer.uint32(18).string(message.website);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProviderInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.website = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProviderInfo);
        if (object.email !== undefined && object.email !== null) {
            message.email = String(object.email);
        }
        else {
            message.email = "";
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = String(object.website);
        }
        else {
            message.website = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.website !== undefined && (obj.website = message.website);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseProviderInfo);
        if (object.email !== undefined && object.email !== null) {
            message.email = object.email;
        }
        else {
            message.email = "";
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        else {
            message.website = "";
        }
        return message;
    },
};
const baseMsgCreateProvider = { owner: "", hostUri: "" };
exports.MsgCreateProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateProvider);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateProvider);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.hostUri !== undefined && object.hostUri !== null) {
            message.hostUri = String(object.hostUri);
        }
        else {
            message.hostUri = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromJSON(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.hostUri !== undefined && (obj.hostUri = message.hostUri);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.info !== undefined &&
            (obj.info = message.info ? exports.ProviderInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateProvider);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.hostUri !== undefined && object.hostUri !== null) {
            message.hostUri = object.hostUri;
        }
        else {
            message.hostUri = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    },
};
const baseMsgCreateProviderResponse = {};
exports.MsgCreateProviderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateProviderResponse);
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
        const message = Object.assign({}, baseMsgCreateProviderResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateProviderResponse);
        return message;
    },
};
const baseMsgUpdateProvider = { owner: "", hostUri: "" };
exports.MsgUpdateProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateProvider);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateProvider);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.hostUri !== undefined && object.hostUri !== null) {
            message.hostUri = String(object.hostUri);
        }
        else {
            message.hostUri = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromJSON(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.hostUri !== undefined && (obj.hostUri = message.hostUri);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.info !== undefined &&
            (obj.info = message.info ? exports.ProviderInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateProvider);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.hostUri !== undefined && object.hostUri !== null) {
            message.hostUri = object.hostUri;
        }
        else {
            message.hostUri = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    },
};
const baseMsgUpdateProviderResponse = {};
exports.MsgUpdateProviderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateProviderResponse);
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
        const message = Object.assign({}, baseMsgUpdateProviderResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateProviderResponse);
        return message;
    },
};
const baseMsgDeleteProvider = { owner: "" };
exports.MsgDeleteProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteProvider);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDeleteProvider);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgDeleteProvider);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
const baseMsgDeleteProviderResponse = {};
exports.MsgDeleteProviderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteProviderResponse);
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
        const message = Object.assign({}, baseMsgDeleteProviderResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDeleteProviderResponse);
        return message;
    },
};
const baseProvider = { owner: "", hostUri: "" };
exports.Provider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProvider);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProvider);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.hostUri !== undefined && object.hostUri !== null) {
            message.hostUri = String(object.hostUri);
        }
        else {
            message.hostUri = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromJSON(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.hostUri !== undefined && (obj.hostUri = message.hostUri);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.info !== undefined &&
            (obj.info = message.info ? exports.ProviderInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseProvider);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.hostUri !== undefined && object.hostUri !== null) {
            message.hostUri = object.hostUri;
        }
        else {
            message.hostUri = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateProvider = this.CreateProvider.bind(this);
        this.UpdateProvider = this.UpdateProvider.bind(this);
        this.DeleteProvider = this.DeleteProvider.bind(this);
    }
    CreateProvider(request) {
        const data = exports.MsgCreateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta1.Msg", "CreateProvider", data);
        return promise.then((data) => exports.MsgCreateProviderResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateProvider(request) {
        const data = exports.MsgUpdateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta1.Msg", "UpdateProvider", data);
        return promise.then((data) => exports.MsgUpdateProviderResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteProvider(request) {
        const data = exports.MsgDeleteProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta1.Msg", "DeleteProvider", data);
        return promise.then((data) => exports.MsgDeleteProviderResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=provider.js.map