"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderSendManifest = void 0;
const provider_1 = require("../utils/provider");
class ProviderSendManifest {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params) {
        var _a;
        const owner = this.akash.address;
        const { sdl, dseq, provider, proxy } = params;
        const manifest = sdl.manifest;
        const r = await this.akash.query.provider.get.params({ provider: provider });
        const providerUri = (_a = r.provider) === null || _a === void 0 ? void 0 : _a.hostUri;
        if (!providerUri) {
            throw new Error(`Provider ${provider} not found on chain.`);
        }
        const uri = `${proxy}${provider_1.submitManifestPath(dseq)}`;
        return provider_1.providerGatewayPost(uri, providerUri, owner, 'SEND_MANIFEST', { manifest: manifest }).then(response => response.text());
    }
}
exports.ProviderSendManifest = ProviderSendManifest;
//# sourceMappingURL=providerSendManifest.js.map