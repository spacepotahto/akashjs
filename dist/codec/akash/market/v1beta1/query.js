"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryLeaseResponse = exports.QueryLeaseRequest = exports.QueryLeasesResponse = exports.QueryLeasesRequest = exports.QueryBidResponse = exports.QueryBidRequest = exports.QueryBidsResponse = exports.QueryBidsRequest = exports.QueryOrderResponse = exports.QueryOrderRequest = exports.QueryOrdersResponse = exports.QueryOrdersRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const order_1 = require("../../../akash/market/v1beta1/order");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const bid_1 = require("../../../akash/market/v1beta1/bid");
const types_1 = require("../../../akash/escrow/v1beta1/types");
const lease_1 = require("../../../akash/market/v1beta1/lease");
exports.protobufPackage = "akash.market.v1beta1";
const baseQueryOrdersRequest = {};
exports.QueryOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            order_1.OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOrdersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = order_1.OrderFilters.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryOrdersRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = order_1.OrderFilters.fromJSON(object.filters);
        }
        else {
            message.filters = undefined;
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
        message.filters !== undefined &&
            (obj.filters = message.filters
                ? order_1.OrderFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOrdersRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = order_1.OrderFilters.fromPartial(object.filters);
        }
        else {
            message.filters = undefined;
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
const baseQueryOrdersResponse = {};
exports.QueryOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            order_1.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOrdersResponse);
        message.orders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseQueryOrdersResponse);
        message.orders = [];
        if (object.orders !== undefined && object.orders !== null) {
            for (const e of object.orders) {
                message.orders.push(order_1.Order.fromJSON(e));
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
        if (message.orders) {
            obj.orders = message.orders.map((e) => (e ? order_1.Order.toJSON(e) : undefined));
        }
        else {
            obj.orders = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOrdersResponse);
        message.orders = [];
        if (object.orders !== undefined && object.orders !== null) {
            for (const e of object.orders) {
                message.orders.push(order_1.Order.fromPartial(e));
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
const baseQueryOrderRequest = {};
exports.QueryOrderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            order_1.OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOrderRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = order_1.OrderID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryOrderRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = order_1.OrderID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? order_1.OrderID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOrderRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = order_1.OrderID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseQueryOrderResponse = {};
exports.QueryOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOrderResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = order_1.Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryOrderResponse);
        if (object.order !== undefined && object.order !== null) {
            message.order = order_1.Order.fromJSON(object.order);
        }
        else {
            message.order = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined &&
            (obj.order = message.order ? order_1.Order.toJSON(message.order) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOrderResponse);
        if (object.order !== undefined && object.order !== null) {
            message.order = order_1.Order.fromPartial(object.order);
        }
        else {
            message.order = undefined;
        }
        return message;
    },
};
const baseQueryBidsRequest = {};
exports.QueryBidsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            bid_1.BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBidsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = bid_1.BidFilters.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryBidsRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = bid_1.BidFilters.fromJSON(object.filters);
        }
        else {
            message.filters = undefined;
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
        message.filters !== undefined &&
            (obj.filters = message.filters
                ? bid_1.BidFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBidsRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = bid_1.BidFilters.fromPartial(object.filters);
        }
        else {
            message.filters = undefined;
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
const baseQueryBidsResponse = {};
exports.QueryBidsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.bids) {
            exports.QueryBidResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBidsResponse);
        message.bids = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bids.push(exports.QueryBidResponse.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseQueryBidsResponse);
        message.bids = [];
        if (object.bids !== undefined && object.bids !== null) {
            for (const e of object.bids) {
                message.bids.push(exports.QueryBidResponse.fromJSON(e));
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
        if (message.bids) {
            obj.bids = message.bids.map((e) => e ? exports.QueryBidResponse.toJSON(e) : undefined);
        }
        else {
            obj.bids = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBidsResponse);
        message.bids = [];
        if (object.bids !== undefined && object.bids !== null) {
            for (const e of object.bids) {
                message.bids.push(exports.QueryBidResponse.fromPartial(e));
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
const baseQueryBidRequest = {};
exports.QueryBidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            bid_1.BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBidRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = bid_1.BidID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBidRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = bid_1.BidID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? bid_1.BidID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBidRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = bid_1.BidID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseQueryBidResponse = {};
exports.QueryBidResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bid !== undefined) {
            bid_1.Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            types_1.Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBidResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bid = bid_1.Bid.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.escrowAccount = types_1.Account.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBidResponse);
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = bid_1.Bid.fromJSON(object.bid);
        }
        else {
            message.bid = undefined;
        }
        if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
            message.escrowAccount = types_1.Account.fromJSON(object.escrowAccount);
        }
        else {
            message.escrowAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bid !== undefined &&
            (obj.bid = message.bid ? bid_1.Bid.toJSON(message.bid) : undefined);
        message.escrowAccount !== undefined &&
            (obj.escrowAccount = message.escrowAccount
                ? types_1.Account.toJSON(message.escrowAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBidResponse);
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = bid_1.Bid.fromPartial(object.bid);
        }
        else {
            message.bid = undefined;
        }
        if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
            message.escrowAccount = types_1.Account.fromPartial(object.escrowAccount);
        }
        else {
            message.escrowAccount = undefined;
        }
        return message;
    },
};
const baseQueryLeasesRequest = {};
exports.QueryLeasesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            lease_1.LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLeasesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = lease_1.LeaseFilters.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryLeasesRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = lease_1.LeaseFilters.fromJSON(object.filters);
        }
        else {
            message.filters = undefined;
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
        message.filters !== undefined &&
            (obj.filters = message.filters
                ? lease_1.LeaseFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLeasesRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = lease_1.LeaseFilters.fromPartial(object.filters);
        }
        else {
            message.filters = undefined;
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
const baseQueryLeasesResponse = {};
exports.QueryLeasesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.leases) {
            exports.QueryLeaseResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLeasesResponse);
        message.leases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leases.push(exports.QueryLeaseResponse.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseQueryLeasesResponse);
        message.leases = [];
        if (object.leases !== undefined && object.leases !== null) {
            for (const e of object.leases) {
                message.leases.push(exports.QueryLeaseResponse.fromJSON(e));
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
        if (message.leases) {
            obj.leases = message.leases.map((e) => e ? exports.QueryLeaseResponse.toJSON(e) : undefined);
        }
        else {
            obj.leases = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLeasesResponse);
        message.leases = [];
        if (object.leases !== undefined && object.leases !== null) {
            for (const e of object.leases) {
                message.leases.push(exports.QueryLeaseResponse.fromPartial(e));
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
const baseQueryLeaseRequest = {};
exports.QueryLeaseRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            lease_1.LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLeaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = lease_1.LeaseID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLeaseRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = lease_1.LeaseID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? lease_1.LeaseID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLeaseRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = lease_1.LeaseID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseQueryLeaseResponse = {};
exports.QueryLeaseResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lease !== undefined) {
            lease_1.Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowPayment !== undefined) {
            types_1.Payment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLeaseResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lease = lease_1.Lease.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.escrowPayment = types_1.Payment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLeaseResponse);
        if (object.lease !== undefined && object.lease !== null) {
            message.lease = lease_1.Lease.fromJSON(object.lease);
        }
        else {
            message.lease = undefined;
        }
        if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
            message.escrowPayment = types_1.Payment.fromJSON(object.escrowPayment);
        }
        else {
            message.escrowPayment = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lease !== undefined &&
            (obj.lease = message.lease ? lease_1.Lease.toJSON(message.lease) : undefined);
        message.escrowPayment !== undefined &&
            (obj.escrowPayment = message.escrowPayment
                ? types_1.Payment.toJSON(message.escrowPayment)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLeaseResponse);
        if (object.lease !== undefined && object.lease !== null) {
            message.lease = lease_1.Lease.fromPartial(object.lease);
        }
        else {
            message.lease = undefined;
        }
        if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
            message.escrowPayment = types_1.Payment.fromPartial(object.escrowPayment);
        }
        else {
            message.escrowPayment = undefined;
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Orders = this.Orders.bind(this);
        this.Order = this.Order.bind(this);
        this.Bids = this.Bids.bind(this);
        this.Bid = this.Bid.bind(this);
        this.Leases = this.Leases.bind(this);
        this.Lease = this.Lease.bind(this);
    }
    Orders(request) {
        const data = exports.QueryOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Query", "Orders", data);
        return promise.then((data) => exports.QueryOrdersResponse.decode(new minimal_1.default.Reader(data)));
    }
    Order(request) {
        const data = exports.QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Query", "Order", data);
        return promise.then((data) => exports.QueryOrderResponse.decode(new minimal_1.default.Reader(data)));
    }
    Bids(request) {
        const data = exports.QueryBidsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Query", "Bids", data);
        return promise.then((data) => exports.QueryBidsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Bid(request) {
        const data = exports.QueryBidRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Query", "Bid", data);
        return promise.then((data) => exports.QueryBidResponse.decode(new minimal_1.default.Reader(data)));
    }
    Leases(request) {
        const data = exports.QueryLeasesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Query", "Leases", data);
        return promise.then((data) => exports.QueryLeasesResponse.decode(new minimal_1.default.Reader(data)));
    }
    Lease(request) {
        const data = exports.QueryLeaseRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Query", "Lease", data);
        return promise.then((data) => exports.QueryLeaseResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map