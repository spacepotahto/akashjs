import { Akash } from "../akash/akash";
import { SDL } from "../utils/deployment";
export interface ProviderSendManifestParams {
    sdl: SDL;
    dseq: number;
    provider: string;
    proxy: string;
}
export declare class ProviderSendManifest {
    private readonly akash;
    constructor(akash: Akash);
    params(params: ProviderSendManifestParams): Promise<string>;
}
