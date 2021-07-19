"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGroupResponse = exports.QueryGroupRequest = exports.QueryDeploymentResponse = exports.QueryDeploymentRequest = exports.QueryDeploymentsResponse = exports.QueryDeploymentsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const deployment_1 = require("../../../akash/deployment/v1beta1/deployment");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("../../../akash/escrow/v1beta1/types");
const group_1 = require("../../../akash/deployment/v1beta1/group");
exports.protobufPackage = "akash.deployment.v1beta1";
const baseQueryDeploymentsRequest = {};
exports.QueryDeploymentsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            deployment_1.DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDeploymentsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = deployment_1.DeploymentFilters.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseQueryDeploymentsRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = deployment_1.DeploymentFilters.fromJSON(object.filters);
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
                ? deployment_1.DeploymentFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDeploymentsRequest);
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = deployment_1.DeploymentFilters.fromPartial(object.filters);
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
const baseQueryDeploymentsResponse = {};
exports.QueryDeploymentsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.deployments) {
            exports.QueryDeploymentResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDeploymentsResponse);
        message.deployments = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployments.push(exports.QueryDeploymentResponse.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseQueryDeploymentsResponse);
        message.deployments = [];
        if (object.deployments !== undefined && object.deployments !== null) {
            for (const e of object.deployments) {
                message.deployments.push(exports.QueryDeploymentResponse.fromJSON(e));
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
        if (message.deployments) {
            obj.deployments = message.deployments.map((e) => e ? exports.QueryDeploymentResponse.toJSON(e) : undefined);
        }
        else {
            obj.deployments = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDeploymentsResponse);
        message.deployments = [];
        if (object.deployments !== undefined && object.deployments !== null) {
            for (const e of object.deployments) {
                message.deployments.push(exports.QueryDeploymentResponse.fromPartial(e));
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
const baseQueryDeploymentRequest = {};
exports.QueryDeploymentRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDeploymentRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDeploymentRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = deployment_1.DeploymentID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? deployment_1.DeploymentID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDeploymentRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = deployment_1.DeploymentID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseQueryDeploymentResponse = {};
exports.QueryDeploymentResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deployment !== undefined) {
            deployment_1.Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            types_1.Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDeploymentResponse);
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployment = deployment_1.Deployment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        const message = Object.assign({}, baseQueryDeploymentResponse);
        message.groups = [];
        if (object.deployment !== undefined && object.deployment !== null) {
            message.deployment = deployment_1.Deployment.fromJSON(object.deployment);
        }
        else {
            message.deployment = undefined;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(group_1.Group.fromJSON(e));
            }
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
        message.deployment !== undefined &&
            (obj.deployment = message.deployment
                ? deployment_1.Deployment.toJSON(message.deployment)
                : undefined);
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? group_1.Group.toJSON(e) : undefined));
        }
        else {
            obj.groups = [];
        }
        message.escrowAccount !== undefined &&
            (obj.escrowAccount = message.escrowAccount
                ? types_1.Account.toJSON(message.escrowAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDeploymentResponse);
        message.groups = [];
        if (object.deployment !== undefined && object.deployment !== null) {
            message.deployment = deployment_1.Deployment.fromPartial(object.deployment);
        }
        else {
            message.deployment = undefined;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(group_1.Group.fromPartial(e));
            }
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
const baseQueryGroupRequest = {};
exports.QueryGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            group_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = group_1.GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryGroupRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = group_1.GroupID.fromJSON(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? group_1.GroupID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryGroupRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = group_1.GroupID.fromPartial(object.id);
        }
        else {
            message.id = undefined;
        }
        return message;
    },
};
const baseQueryGroupResponse = {};
exports.QueryGroupResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            group_1.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryGroupResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = group_1.Group.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryGroupResponse);
        if (object.group !== undefined && object.group !== null) {
            message.group = group_1.Group.fromJSON(object.group);
        }
        else {
            message.group = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.group !== undefined &&
            (obj.group = message.group ? group_1.Group.toJSON(message.group) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryGroupResponse);
        if (object.group !== undefined && object.group !== null) {
            message.group = group_1.Group.fromPartial(object.group);
        }
        else {
            message.group = undefined;
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Deployments = this.Deployments.bind(this);
        this.Deployment = this.Deployment.bind(this);
        this.Group = this.Group.bind(this);
    }
    Deployments(request) {
        const data = exports.QueryDeploymentsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployments", data);
        return promise.then((data) => exports.QueryDeploymentsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Deployment(request) {
        const data = exports.QueryDeploymentRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployment", data);
        return promise.then((data) => exports.QueryDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    Group(request) {
        const data = exports.QueryGroupRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Group", data);
        return promise.then((data) => exports.QueryGroupResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map