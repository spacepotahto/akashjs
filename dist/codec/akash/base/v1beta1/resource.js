"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUnits = exports.Storage = exports.Memory = exports.CPU = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resourcevalue_1 = require("../../../akash/base/v1beta1/resourcevalue");
const attribute_1 = require("../../../akash/base/v1beta1/attribute");
const endpoint_1 = require("../../../akash/base/v1beta1/endpoint");
exports.protobufPackage = "akash.base.v1beta1";
const baseCPU = {};
exports.CPU = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.units !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCPU);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.units = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = Object.assign({}, baseCPU);
        message.attributes = [];
        if (object.units !== undefined && object.units !== null) {
            message.units = resourcevalue_1.ResourceValue.fromJSON(object.units);
        }
        else {
            message.units = undefined;
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
        message.units !== undefined &&
            (obj.units = message.units
                ? resourcevalue_1.ResourceValue.toJSON(message.units)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCPU);
        message.attributes = [];
        if (object.units !== undefined && object.units !== null) {
            message.units = resourcevalue_1.ResourceValue.fromPartial(object.units);
        }
        else {
            message.units = undefined;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMemory = {};
exports.Memory = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMemory);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = Object.assign({}, baseMemory);
        message.attributes = [];
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = resourcevalue_1.ResourceValue.fromJSON(object.quantity);
        }
        else {
            message.quantity = undefined;
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
        message.quantity !== undefined &&
            (obj.quantity = message.quantity
                ? resourcevalue_1.ResourceValue.toJSON(message.quantity)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMemory);
        message.attributes = [];
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = resourcevalue_1.ResourceValue.fromPartial(object.quantity);
        }
        else {
            message.quantity = undefined;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseStorage = {};
exports.Storage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStorage);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = Object.assign({}, baseStorage);
        message.attributes = [];
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = resourcevalue_1.ResourceValue.fromJSON(object.quantity);
        }
        else {
            message.quantity = undefined;
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
        message.quantity !== undefined &&
            (obj.quantity = message.quantity
                ? resourcevalue_1.ResourceValue.toJSON(message.quantity)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStorage);
        message.attributes = [];
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = resourcevalue_1.ResourceValue.fromPartial(object.quantity);
        }
        else {
            message.quantity = undefined;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(attribute_1.Attribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResourceUnits = {};
exports.ResourceUnits = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cpu !== undefined) {
            exports.CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            exports.Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.storage !== undefined) {
            exports.Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.endpoints) {
            endpoint_1.Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceUnits);
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cpu = exports.CPU.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.memory = exports.Memory.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.storage = exports.Storage.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endpoints.push(endpoint_1.Endpoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceUnits);
        message.endpoints = [];
        if (object.cpu !== undefined && object.cpu !== null) {
            message.cpu = exports.CPU.fromJSON(object.cpu);
        }
        else {
            message.cpu = undefined;
        }
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = exports.Memory.fromJSON(object.memory);
        }
        else {
            message.memory = undefined;
        }
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(endpoint_1.Endpoint.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cpu !== undefined &&
            (obj.cpu = message.cpu ? exports.CPU.toJSON(message.cpu) : undefined);
        message.memory !== undefined &&
            (obj.memory = message.memory ? exports.Memory.toJSON(message.memory) : undefined);
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? exports.Storage.toJSON(message.storage)
                : undefined);
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e ? endpoint_1.Endpoint.toJSON(e) : undefined);
        }
        else {
            obj.endpoints = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResourceUnits);
        message.endpoints = [];
        if (object.cpu !== undefined && object.cpu !== null) {
            message.cpu = exports.CPU.fromPartial(object.cpu);
        }
        else {
            message.cpu = undefined;
        }
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = exports.Memory.fromPartial(object.memory);
        }
        else {
            message.memory = undefined;
        }
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(endpoint_1.Endpoint.fromPartial(e));
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=resource.js.map