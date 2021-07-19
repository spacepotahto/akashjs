"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgDeleteProviderAttributesResponse = exports.MsgDeleteProviderAttributes = exports.MsgSignProviderAttributesResponse = exports.MsgSignProviderAttributes = exports.AttributesFilters = exports.AttributesResponse = exports.AuditedAttributes = exports.Provider = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attribute_1 = require("../../../akash/base/v1beta1/attribute");
exports.protobufPackage = "akash.audit.v1beta1";
const baseProvider = { owner: "", auditor: "" };
exports.Provider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.auditor = reader.string();
                    break;
                case 4:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = String(object.auditor);
        }
        else {
            message.auditor = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
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
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        else {
            message.auditor = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAuditedAttributes = { owner: "", auditor: "" };
exports.AuditedAttributes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAuditedAttributes);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAuditedAttributes);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = String(object.auditor);
        }
        else {
            message.auditor = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAuditedAttributes);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        else {
            message.auditor = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAttributesResponse = {};
exports.AttributesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.attributes) {
            exports.AuditedAttributes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttributesResponse);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attributes.push(exports.AuditedAttributes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttributesResponse);
        message.attributes = [];
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.AuditedAttributes.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.AuditedAttributes.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAttributesResponse);
        message.attributes = [];
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.AuditedAttributes.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAttributesFilters = { auditors: "", owners: "" };
exports.AttributesFilters = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.auditors) {
            writer.uint32(10).string(v);
        }
        for (const v of message.owners) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttributesFilters);
        message.auditors = [];
        message.owners = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditors.push(reader.string());
                    break;
                case 2:
                    message.owners.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttributesFilters);
        message.auditors = [];
        message.owners = [];
        if (object.auditors !== undefined && object.auditors !== null) {
            for (const e of object.auditors) {
                message.auditors.push(String(e));
            }
        }
        if (object.owners !== undefined && object.owners !== null) {
            for (const e of object.owners) {
                message.owners.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.auditors) {
            obj.auditors = message.auditors.map((e) => e);
        }
        else {
            obj.auditors = [];
        }
        if (message.owners) {
            obj.owners = message.owners.map((e) => e);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAttributesFilters);
        message.auditors = [];
        message.owners = [];
        if (object.auditors !== undefined && object.auditors !== null) {
            for (const e of object.auditors) {
                message.auditors.push(e);
            }
        }
        if (object.owners !== undefined && object.owners !== null) {
            for (const e of object.owners) {
                message.owners.push(e);
            }
        }
        return message;
    },
};
const baseMsgSignProviderAttributes = { owner: "", auditor: "" };
exports.MsgSignProviderAttributes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSignProviderAttributes);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgSignProviderAttributes);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = String(object.auditor);
        }
        else {
            message.auditor = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgSignProviderAttributes);
        message.attributes = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        else {
            message.auditor = "";
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgSignProviderAttributesResponse = {};
exports.MsgSignProviderAttributesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSignProviderAttributesResponse);
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
        const message = Object.assign({}, baseMsgSignProviderAttributesResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgSignProviderAttributesResponse);
        return message;
    },
};
const baseMsgDeleteProviderAttributes = {
    owner: "",
    auditor: "",
    keys: "",
};
exports.MsgDeleteProviderAttributes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.keys) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteProviderAttributes);
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
                    break;
                case 3:
                    message.keys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgDeleteProviderAttributes);
        message.keys = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = String(object.auditor);
        }
        else {
            message.auditor = "";
        }
        if (object.keys !== undefined && object.keys !== null) {
            for (const e of object.keys) {
                message.keys.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.keys) {
            obj.keys = message.keys.map((e) => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgDeleteProviderAttributes);
        message.keys = [];
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        else {
            message.auditor = "";
        }
        if (object.keys !== undefined && object.keys !== null) {
            for (const e of object.keys) {
                message.keys.push(e);
            }
        }
        return message;
    },
};
const baseMsgDeleteProviderAttributesResponse = {};
exports.MsgDeleteProviderAttributesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDeleteProviderAttributesResponse);
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
        const message = Object.assign({}, baseMsgDeleteProviderAttributesResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDeleteProviderAttributesResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SignProviderAttributes = this.SignProviderAttributes.bind(this);
        this.DeleteProviderAttributes = this.DeleteProviderAttributes.bind(this);
    }
    SignProviderAttributes(request) {
        const data = exports.MsgSignProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Msg", "SignProviderAttributes", data);
        return promise.then((data) => exports.MsgSignProviderAttributesResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteProviderAttributes(request) {
        const data = exports.MsgDeleteProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Msg", "DeleteProviderAttributes", data);
        return promise.then((data) => exports.MsgDeleteProviderAttributesResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=audit.js.map