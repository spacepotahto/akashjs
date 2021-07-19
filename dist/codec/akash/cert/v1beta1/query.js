"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCertificatesResponse = exports.QueryCertificatesRequest = exports.CertificateResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cert_1 = require("../../../akash/cert/v1beta1/cert");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "akash.cert.v1beta1";
const baseCertificateResponse = { serial: "" };
exports.CertificateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificate !== undefined) {
            cert_1.Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCertificateResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificate = cert_1.Certificate.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCertificateResponse);
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = cert_1.Certificate.fromJSON(object.certificate);
        }
        else {
            message.certificate = undefined;
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
        message.certificate !== undefined &&
            (obj.certificate = message.certificate
                ? cert_1.Certificate.toJSON(message.certificate)
                : undefined);
        message.serial !== undefined && (obj.serial = message.serial);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCertificateResponse);
        if (object.certificate !== undefined && object.certificate !== null) {
            message.certificate = cert_1.Certificate.fromPartial(object.certificate);
        }
        else {
            message.certificate = undefined;
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
const baseQueryCertificatesRequest = {};
exports.QueryCertificatesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filter !== undefined) {
            cert_1.CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCertificatesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter = cert_1.CertificateFilter.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryCertificatesRequest);
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = cert_1.CertificateFilter.fromJSON(object.filter);
        }
        else {
            message.filter = undefined;
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
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? cert_1.CertificateFilter.toJSON(message.filter)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCertificatesRequest);
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = cert_1.CertificateFilter.fromPartial(object.filter);
        }
        else {
            message.filter = undefined;
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
const baseQueryCertificatesResponse = {};
exports.QueryCertificatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            exports.CertificateResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCertificatesResponse);
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(exports.CertificateResponse.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseQueryCertificatesResponse);
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(exports.CertificateResponse.fromJSON(e));
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
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? exports.CertificateResponse.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCertificatesResponse);
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(exports.CertificateResponse.fromPartial(e));
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
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Certificates = this.Certificates.bind(this);
    }
    Certificates(request) {
        const data = exports.QueryCertificatesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta1.Query", "Certificates", data);
        return promise.then((data) => exports.QueryCertificatesResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map