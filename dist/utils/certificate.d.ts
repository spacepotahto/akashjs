export interface PEMBlocks {
    owner: string;
    serialNumber: number;
    certificate: ArrayBuffer;
    privateKey: ArrayBuffer;
    publicKey: ArrayBuffer;
}
export declare function createPEMBlocks(address: string, naf?: number, // certificate is not valid after this many days.
nbf?: Date, // certificate is not valid before this date.
signAlgorithm?: string, hashAlgorithm?: string): Promise<PEMBlocks>;
export declare function savePEMBlocks(pemBlocks: PEMBlocks): Promise<void>;
export declare function loadPEMBlocks(owner: string): Promise<PEMBlocks>;
export declare function deletePEMBlocks(owner: string, serial: number): Promise<void>;
export declare function encode(pemBlocks: PEMBlocks): {
    certificate: string;
    privateKey: string;
    publicKey: string;
};
export declare function getPemStrings(owner: string): Promise<{
    cert: string;
    key: string;
}>;
export declare function stringToUint8Array(str: string): Uint8Array;
