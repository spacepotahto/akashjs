"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxCertRevoke = void 0;
const akash_1 = require("../akash/akash");
const certificate_1 = require("../utils/certificate");
class TxCertRevoke {
    constructor(akash) {
        this.akash = akash;
    }
    async getSerial(owner) {
        const cert = await certificate_1.loadPEMBlocks(owner);
        if (cert) {
            return cert.serialNumber.toString();
        }
        return "";
    }
    async params(params = {}) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, serial = await this.getSerial(owner) } = params;
        const request = {
            id: {
                owner: owner,
                serial: serial
            }
        };
        const response = this.akash.signingClient.certRevoke(owner, request, fee, memo);
        response.then(() => {
            // Delete locally stored certificate if exists
            return certificate_1.deletePEMBlocks(owner, Number(serial));
        });
        return response;
    }
}
exports.TxCertRevoke = TxCertRevoke;
//# sourceMappingURL=txCertRevoke.js.map