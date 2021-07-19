"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "akash.market.v1beta1";
const baseParams = { orderMaxBids: 0 };
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidMinDeposit !== undefined) {
            coin_1.Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderMaxBids !== 0) {
            writer.uint32(16).uint32(message.orderMaxBids);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidMinDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderMaxBids = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        if (object.bidMinDeposit !== undefined && object.bidMinDeposit !== null) {
            message.bidMinDeposit = coin_1.Coin.fromJSON(object.bidMinDeposit);
        }
        else {
            message.bidMinDeposit = undefined;
        }
        if (object.orderMaxBids !== undefined && object.orderMaxBids !== null) {
            message.orderMaxBids = Number(object.orderMaxBids);
        }
        else {
            message.orderMaxBids = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bidMinDeposit !== undefined &&
            (obj.bidMinDeposit = message.bidMinDeposit
                ? coin_1.Coin.toJSON(message.bidMinDeposit)
                : undefined);
        message.orderMaxBids !== undefined &&
            (obj.orderMaxBids = message.orderMaxBids);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.bidMinDeposit !== undefined && object.bidMinDeposit !== null) {
            message.bidMinDeposit = coin_1.Coin.fromPartial(object.bidMinDeposit);
        }
        else {
            message.bidMinDeposit = undefined;
        }
        if (object.orderMaxBids !== undefined && object.orderMaxBids !== null) {
            message.orderMaxBids = object.orderMaxBids;
        }
        else {
            message.orderMaxBids = 0;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=params.js.map