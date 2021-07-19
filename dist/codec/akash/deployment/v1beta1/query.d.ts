import Long from "long";
import _m0 from "protobufjs/minimal";
import { DeploymentFilters, DeploymentID, Deployment } from "../../../akash/deployment/v1beta1/deployment";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "../../../akash/escrow/v1beta1/types";
import { GroupID, Group } from "../../../akash/deployment/v1beta1/group";
export declare const protobufPackage = "akash.deployment.v1beta1";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
    filters?: DeploymentFilters;
    pagination?: PageRequest;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
    deployments: QueryDeploymentResponse[];
    pagination?: PageResponse;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
    id?: DeploymentID;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
    deployment?: Deployment;
    groups: Group[];
    escrowAccount?: Account;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
    id?: GroupID;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
    group?: Group;
}
export declare const QueryDeploymentsRequest: {
    encode(message: QueryDeploymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentsRequest;
    fromJSON(object: any): QueryDeploymentsRequest;
    toJSON(message: QueryDeploymentsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDeploymentsRequest>): QueryDeploymentsRequest;
};
export declare const QueryDeploymentsResponse: {
    encode(message: QueryDeploymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentsResponse;
    fromJSON(object: any): QueryDeploymentsResponse;
    toJSON(message: QueryDeploymentsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDeploymentsResponse>): QueryDeploymentsResponse;
};
export declare const QueryDeploymentRequest: {
    encode(message: QueryDeploymentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentRequest;
    fromJSON(object: any): QueryDeploymentRequest;
    toJSON(message: QueryDeploymentRequest): unknown;
    fromPartial(object: DeepPartial<QueryDeploymentRequest>): QueryDeploymentRequest;
};
export declare const QueryDeploymentResponse: {
    encode(message: QueryDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentResponse;
    fromJSON(object: any): QueryDeploymentResponse;
    toJSON(message: QueryDeploymentResponse): unknown;
    fromPartial(object: DeepPartial<QueryDeploymentResponse>): QueryDeploymentResponse;
};
export declare const QueryGroupRequest: {
    encode(message: QueryGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGroupRequest;
    fromJSON(object: any): QueryGroupRequest;
    toJSON(message: QueryGroupRequest): unknown;
    fromPartial(object: DeepPartial<QueryGroupRequest>): QueryGroupRequest;
};
export declare const QueryGroupResponse: {
    encode(message: QueryGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGroupResponse;
    fromJSON(object: any): QueryGroupResponse;
    toJSON(message: QueryGroupResponse): unknown;
    fromPartial(object: DeepPartial<QueryGroupResponse>): QueryGroupResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Deployments queries deployments */
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    /** Deployment queries deployment details */
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    /** Group queries group details */
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
