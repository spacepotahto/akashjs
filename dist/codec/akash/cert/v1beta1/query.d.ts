import Long from "long";
import _m0 from "protobufjs/minimal";
import { Certificate, CertificateFilter } from "../../../akash/cert/v1beta1/cert";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "akash.cert.v1beta1";
export interface CertificateResponse {
    certificate?: Certificate;
    serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
    filter?: CertificateFilter;
    pagination?: PageRequest;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
    certificates: CertificateResponse[];
    pagination?: PageResponse;
}
export declare const CertificateResponse: {
    encode(message: CertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CertificateResponse;
    fromJSON(object: any): CertificateResponse;
    toJSON(message: CertificateResponse): unknown;
    fromPartial(object: DeepPartial<CertificateResponse>): CertificateResponse;
};
export declare const QueryCertificatesRequest: {
    encode(message: QueryCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCertificatesRequest;
    fromJSON(object: any): QueryCertificatesRequest;
    toJSON(message: QueryCertificatesRequest): unknown;
    fromPartial(object: DeepPartial<QueryCertificatesRequest>): QueryCertificatesRequest;
};
export declare const QueryCertificatesResponse: {
    encode(message: QueryCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCertificatesResponse;
    fromJSON(object: any): QueryCertificatesResponse;
    toJSON(message: QueryCertificatesResponse): unknown;
    fromPartial(object: DeepPartial<QueryCertificatesResponse>): QueryCertificatesResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Certificates queries certificates */
    Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
