import { Manifest } from "./deployment";
export interface LeaseID {
    dseq: number;
    gseq: number;
    oseq: number;
}
export declare function leasePath(id: LeaseID): string;
export declare function submitManifestPath(dseq: LeaseID["dseq"]): string;
export declare function leaseStatusPath(id: LeaseID): string;
export declare function leaseEventsPath(id: LeaseID): string;
export declare function serviceStatusPath(id: LeaseID, service: string): string;
export declare function serviceLogsPath(id: LeaseID): string;
export interface ProviderProxyBody {
    providerUri: string;
    cert: string;
    key: string;
    type: 'SEND_MANIFEST' | 'LEASE_STATUS' | 'LEASE_LOGS' | 'LEASE_EVENTS';
    manifest?: Manifest;
}
export declare function providerGatewayPost(uri: string, providerUri: string, owner: string, type: ProviderProxyBody["type"], payload?: Partial<ProviderProxyBody>): Promise<Response>;
