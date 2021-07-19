"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgRevokeCertificateResponse = exports.MsgRevokeCertificate = exports.MsgCreateCertificateResponse = exports.MsgCreateCertificate = exports.CertificateFilter = exports.Certificate = exports.CertificateID = exports.certificate_StateToJSON = exports.certificate_StateFromJSON = exports.Certificate_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "akash.cert.v1beta1";
/** State is an enum which refers to state of deployment */
var Certificate_State;
(function (Certificate_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Certificate_State[Certificate_State["invalid"] = 0] = "invalid";
    /** valid - CertificateValid denotes state for deployment active */
    Certificate_State[Certificate_State["valid"] = 1] = "valid";
    /** revoked - CertificateRevoked denotes state for deployment closed */
    Certificate_State[Certificate_State["revoked"] = 2] = "revoked";
    Certificate_State[Certificate_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Certificate_State = exports.Certificate_State || (exports.Certificate_State = {}));
function certificate_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Certificate_State.invalid;
        case 1:
        case "valid":
            return Certificate_State.valid;
        case 2:
        case "revoked":
            return Certificate_State.revoked;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Certificate_State.UNRECOGNIZED;
    }
}
exports.certificate_StateFromJSON = certificate_StateFromJSON;
function certificate_StateToJSON(object) {
    switch (object) {
        case Certificate_State.invalid:
            return "invalid";
        case Certificate_State.valid:
            return "valid";
        case Certificate_State.revoked:
            return "revoked";
        default:
            return "UNKNOWN";
    }
}
exports.certificate_StateToJSON = certificate_StateToJSON;
const baseCertificateID = { owner: "", serial: "" };
exports.CertificateID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCertificateID);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.serial = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCertificateID);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = String(object.serial);
        }
        else {
            message.serial = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.serial !== undefined && (obj.serial = message.serial);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCertificateID);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = object.serial;
        }
        else {
            message.serial = "";
        }
        return message;
    },
};
const baseCertificate = { state: 0 };
exports.Certificate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.cert.length !== 0) {
            writer.uint32(26).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(34).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCertificate);
        message.cert = new Uint8Array();
        message.pubkey = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.cert = reader.bytes();
                    break;
                case 4:
                    message.pubkey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCertificate);
        message.cert = new Uint8Array();
        message.pubkey = new Uint8Array();
        if (object.state !== undefined && object.state !== null) {
            message.state = certificate_StateFromJSON(object.state);
        }
        else {
            message.state = 0;
        }
        if (object.cert !== undefined && object.cert !== null) {
            message.cert = bytesFromBase64(object.cert);
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = bytesFromBase64(object.pubkey);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined &&
            (obj.state = certificate_StateToJSON(message.state));
        message.cert !== undefined &&
            (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : new Uint8Array()));
        message.pubkey !== undefined &&
            (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCertificate);
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = 0;
        }
        if (object.cert !== undefined && object.cert !== null) {
            message.cert = object.cert;
        }
        else {
            message.cert = new Uint8Array();
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = object.pubkey;
        }
        else {
            message.pubkey = new Uint8Array();
        }
        return message;
    },
};
const baseCertificateFilter = { owner: "", serial: "", state: "" };
exports.CertificateFilter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        if (message.state !== "") {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCertificateFilter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.serial = reader.string();
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
        const message = Object.assign({}, baseCertificateFilter);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = String(object.serial);
        }
        else {
            message.serial = "";
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
        message.serial !== undefined && (obj.serial = message.serial);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCertificateFilter);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.serial !== undefined && object.serial !== null) {
            message.serial = object.serial;
        }
        else {
            message.serial = "";
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
const baseMsgCreateCertificate = { owner: "" };
exports.MsgCreateCertificate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.cert.length !== 0) {
            writer.uint32(18).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(26).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateCertificate);
        message.cert = new Uint8Array();
        message.pubkey = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.cert = reader.bytes();
                    break;
                case 3:
                    message.pubkey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateCertificate);
        message.cert = new Uint8Array();
        message.pubkey = new Uint8Array();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.cert !== undefined && object.cert !== null) {
            message.cert = bytesFromBase64(object.cert);
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = bytesFromBase64(object.pubkey);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.cert !== undefined &&
            (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : new Uint8Array()));
        message.pubkey !== undefined &&
            (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateCertificate);
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.cert !== undefined && object.cert !== null) {
            message.cert = object.cert;
        }
        else {
            message.cert = new Uint8Array();
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = object.pubkey;
        }
        else {
            message.pubkey = new Uint8Array();
        }
        return message;
    },
};
const baseMsgCreateCertificateResponse = {};
exports.MsgCreateCertificateResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateCertificateResponse);
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
        const message = Object.assign({}, baseMsgCreateCertificateResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateCertificateResponse);
        return message;
    },
};
const baseMsgRevokeCertificate = {};
exports.MsgRevokeCertificate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeCertificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.CertificateID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRevokeCertificate);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.CertificateID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.CertificateID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRevokeCertificate);
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.CertificateID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseMsgRevokeCertificateResponse = {};
exports.MsgRevokeCertificateResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRevokeCertificateResponse);
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
        const message = Object.assign({}, baseMsgRevokeCertificateResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgRevokeCertificateResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateCertificate = this.CreateCertificate.bind(this);
        this.RevokeCertificate = this.RevokeCertificate.bind(this);
    }
    CreateCertificate(request) {
        const data = exports.MsgCreateCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta1.Msg", "CreateCertificate", data);
        return promise.then((data) => exports.MsgCreateCertificateResponse.decode(new minimal_1.default.Reader(data)));
    }
    RevokeCertificate(request) {
        const data = exports.MsgRevokeCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta1.Msg", "RevokeCertificate", data);
        return promise.then((data) => exports.MsgRevokeCertificateResponse.decode(new minimal_1.default.Reader(data)));
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
//# sourceMappingURL=cert.js.map