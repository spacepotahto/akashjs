"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.endpoint_KindToJSON = exports.endpoint_KindFromJSON = exports.Endpoint_Kind = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "akash.base.v1beta1";
/** This describes how the endpoint is implemented when the lease is deployed */
var Endpoint_Kind;
(function (Endpoint_Kind) {
    /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
    Endpoint_Kind[Endpoint_Kind["SHARED_HTTP"] = 0] = "SHARED_HTTP";
    /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
    Endpoint_Kind[Endpoint_Kind["RANDOM_PORT"] = 1] = "RANDOM_PORT";
    Endpoint_Kind[Endpoint_Kind["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Endpoint_Kind = exports.Endpoint_Kind || (exports.Endpoint_Kind = {}));
function endpoint_KindFromJSON(object) {
    switch (object) {
        case 0:
        case "SHARED_HTTP":
            return Endpoint_Kind.SHARED_HTTP;
        case 1:
        case "RANDOM_PORT":
            return Endpoint_Kind.RANDOM_PORT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Endpoint_Kind.UNRECOGNIZED;
    }
}
exports.endpoint_KindFromJSON = endpoint_KindFromJSON;
function endpoint_KindToJSON(object) {
    switch (object) {
        case Endpoint_Kind.SHARED_HTTP:
            return "SHARED_HTTP";
        case Endpoint_Kind.RANDOM_PORT:
            return "RANDOM_PORT";
        default:
            return "UNKNOWN";
    }
}
exports.endpoint_KindToJSON = endpoint_KindToJSON;
const baseEndpoint = { kind: 0 };
exports.Endpoint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEndpoint);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEndpoint);
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = endpoint_KindFromJSON(object.kind);
        }
        else {
            message.kind = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined &&
            (obj.kind = endpoint_KindToJSON(message.kind));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEndpoint);
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        else {
            message.kind = 0;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=endpoint.js.map