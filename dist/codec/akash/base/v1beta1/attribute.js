"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementRequirements = exports.SignedBy = exports.Attribute = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "akash.base.v1beta1";
const baseAttribute = { key: "", value: "" };
exports.Attribute = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttribute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttribute);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAttribute);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
};
const baseSignedBy = { allOf: "", anyOf: "" };
exports.SignedBy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.allOf) {
            writer.uint32(10).string(v);
        }
        for (const v of message.anyOf) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSignedBy);
        message.allOf = [];
        message.anyOf = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allOf.push(reader.string());
                    break;
                case 2:
                    message.anyOf.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSignedBy);
        message.allOf = [];
        message.anyOf = [];
        if (object.allOf !== undefined && object.allOf !== null) {
            for (const e of object.allOf) {
                message.allOf.push(String(e));
            }
        }
        if (object.anyOf !== undefined && object.anyOf !== null) {
            for (const e of object.anyOf) {
                message.anyOf.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.allOf) {
            obj.allOf = message.allOf.map((e) => e);
        }
        else {
            obj.allOf = [];
        }
        if (message.anyOf) {
            obj.anyOf = message.anyOf.map((e) => e);
        }
        else {
            obj.anyOf = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSignedBy);
        message.allOf = [];
        message.anyOf = [];
        if (object.allOf !== undefined && object.allOf !== null) {
            for (const e of object.allOf) {
                message.allOf.push(e);
            }
        }
        if (object.anyOf !== undefined && object.anyOf !== null) {
            for (const e of object.anyOf) {
                message.anyOf.push(e);
            }
        }
        return message;
    },
};
const basePlacementRequirements = {};
exports.PlacementRequirements = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedBy !== undefined) {
            exports.SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementRequirements);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBy = exports.SignedBy.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePlacementRequirements);
        message.attributes = [];
        if (object.signedBy !== undefined && object.signedBy !== null) {
            message.signedBy = exports.SignedBy.fromJSON(object.signedBy);
        }
        else {
            message.signedBy = undefined;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.Attribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.signedBy !== undefined &&
            (obj.signedBy = message.signedBy
                ? exports.SignedBy.toJSON(message.signedBy)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePlacementRequirements);
        message.attributes = [];
        if (object.signedBy !== undefined && object.signedBy !== null) {
            message.signedBy = exports.SignedBy.fromPartial(object.signedBy);
        }
        else {
            message.signedBy = undefined;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=attribute.js.map