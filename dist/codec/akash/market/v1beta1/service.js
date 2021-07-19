"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const bid_1 = require("../../../akash/market/v1beta1/bid");
const lease_1 = require("../../../akash/market/v1beta1/lease");
exports.protobufPackage = "akash.market.v1beta1";
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateBid = this.CreateBid.bind(this);
        this.CloseBid = this.CloseBid.bind(this);
        this.WithdrawLease = this.WithdrawLease.bind(this);
        this.CreateLease = this.CreateLease.bind(this);
        this.CloseLease = this.CloseLease.bind(this);
    }
    CreateBid(request) {
        const data = bid_1.MsgCreateBid.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Msg", "CreateBid", data);
        return promise.then((data) => bid_1.MsgCreateBidResponse.decode(new minimal_1.default.Reader(data)));
    }
    CloseBid(request) {
        const data = bid_1.MsgCloseBid.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Msg", "CloseBid", data);
        return promise.then((data) => bid_1.MsgCloseBidResponse.decode(new minimal_1.default.Reader(data)));
    }
    WithdrawLease(request) {
        const data = lease_1.MsgWithdrawLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Msg", "WithdrawLease", data);
        return promise.then((data) => lease_1.MsgWithdrawLeaseResponse.decode(new minimal_1.default.Reader(data)));
    }
    CreateLease(request) {
        const data = lease_1.MsgCreateLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Msg", "CreateLease", data);
        return promise.then((data) => lease_1.MsgCreateLeaseResponse.decode(new minimal_1.default.Reader(data)));
    }
    CloseLease(request) {
        const data = lease_1.MsgCloseLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta1.Msg", "CloseLease", data);
        return promise.then((data) => lease_1.MsgCloseLeaseResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=service.js.map