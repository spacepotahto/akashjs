import { Akash } from "../akash/akash";
export interface ProviderLeaseStatusParams {
    dseq: number;
    gseq: number;
    oseq: number;
    provider: string;
    proxy: string;
}
export declare class ProviderLeaseStatus {
    private readonly akash;
    constructor(akash: Akash);
    params(params: ProviderLeaseStatusParams): Promise<any>;
}
