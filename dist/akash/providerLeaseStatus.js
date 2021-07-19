"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderLeaseStatus = void 0;
const provider_1 = require("../utils/provider");
class ProviderLeaseStatus {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        var _a;
        const owner = this.akash.address;
        const { dseq, gseq, oseq, provider, proxy } = params;
        const r = await this.akash.query.provider.get.params({ provider: provider });
        const providerUri = (_a = r.provider) === null || _a === void 0 ? void 0 : _a.hostUri;
        if (!providerUri) {
            throw new Error(`Provider ${provider} not found on chain.`);
        }
        const uri = `${proxy}${provider_1.leaseStatusPath({ dseq: dseq, gseq: gseq, oseq: oseq })}`;
        return provider_1.providerGatewayPost(uri, providerUri, owner, 'LEASE_STATUS').then(response => response.json());
    }
}
exports.ProviderLeaseStatus = ProviderLeaseStatus;
//# sourceMappingURL=providerLeaseStatus.js.map