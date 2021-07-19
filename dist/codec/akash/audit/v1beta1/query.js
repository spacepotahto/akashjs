"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAuditorAttributesRequest = exports.QueryProviderAuditorRequest = exports.QueryProviderAttributesRequest = exports.QueryAllProvidersAttributesRequest = exports.QueryProviderRequest = exports.QueryProvidersResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const audit_1 = require("../../../akash/audit/v1beta1/audit");
exports.protobufPackage = "akash.audit.v1beta1";
const baseQueryProvidersResponse = {};
exports.QueryProvidersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            audit_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProvidersResponse);
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(audit_1.Provider.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryProvidersResponse);
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(audit_1.Provider.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? audit_1.Provider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProvidersResponse);
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(audit_1.Provider.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryProviderRequest = { auditor: "", owner: "" };
exports.QueryProviderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProviderRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseQueryProviderRequest);
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = String(object.auditor);
        }
        else {
            message.auditor = "";
        }
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
        message.auditor !== undefined && (obj.auditor = message.auditor);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProviderRequest);
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        else {
            message.auditor = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
const baseQueryAllProvidersAttributesRequest = {};
exports.QueryAllProvidersAttributesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAllProvidersAttributesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAllProvidersAttributesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAllProvidersAttributesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryProviderAttributesRequest = { owner: "" };
exports.QueryProviderAttributesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProviderAttributesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryProviderAttributesRequest);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProviderAttributesRequest);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryProviderAuditorRequest = { auditor: "", owner: "" };
exports.QueryProviderAuditorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryProviderAuditorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseQueryProviderAuditorRequest);
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = String(object.auditor);
        }
        else {
            message.auditor = "";
        }
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
        message.auditor !== undefined && (obj.auditor = message.auditor);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryProviderAuditorRequest);
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        else {
            message.auditor = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
const baseQueryAuditorAttributesRequest = { auditor: "" };
exports.QueryAuditorAttributesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryAuditorAttributesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryAuditorAttributesRequest);
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = String(object.auditor);
        }
        else {
            message.auditor = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.auditor !== undefined && (obj.auditor = message.auditor);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryAuditorAttributesRequest);
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        else {
            message.auditor = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.AllProvidersAttributes = this.AllProvidersAttributes.bind(this);
        this.ProviderAttributes = this.ProviderAttributes.bind(this);
        this.ProviderAuditorAttributes = this.ProviderAuditorAttributes.bind(this);
        this.AuditorAttributes = this.AuditorAttributes.bind(this);
    }
    AllProvidersAttributes(request) {
        const data = exports.QueryAllProvidersAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "AllProvidersAttributes", data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
    ProviderAttributes(request) {
        const data = exports.QueryProviderAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "ProviderAttributes", data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
    ProviderAuditorAttributes(request) {
        const data = exports.QueryProviderAuditorRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "ProviderAuditorAttributes", data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
    AuditorAttributes(request) {
        const data = exports.QueryAuditorAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "AuditorAttributes", data);
        return promise.then((data) => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map