"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigningAkashClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const cert_1 = require("../codec/akash/cert/v1beta1/cert");
const deployment_1 = require("../codec/akash/deployment/v1beta1/deployment");
const group_1 = require("../codec/akash/deployment/v1beta1/group");
const lease_1 = require("../codec/akash/market/v1beta1/lease");
function akashRegistry() {
    return new proto_signing_1.Registry([
        ...stargate_1.defaultRegistryTypes,
        ["/akash.cert.v1beta1.MsgCreateCertificate", cert_1.MsgCreateCertificate],
        ["/akash.cert.v1beta1.MsgRevokeCertificate", cert_1.MsgRevokeCertificate],
        ["/akash.deployment.v1beta1.MsgCreateDeployment", deployment_1.MsgCreateDeployment],
        ["/akash.deployment.v1beta1.MsgCloseDeployment", deployment_1.MsgCloseDeployment],
        ["/akash.deployment.v1beta1.MsgDepositDeployment", deployment_1.MsgDepositDeployment],
        ["/akash.deployment.v1beta1.MsgUpdateDeployment", deployment_1.MsgUpdateDeployment],
        ["/akash.deployment.v1beta1.MsgCloseGroup", group_1.MsgCloseGroup],
        ["/akash.deployment.v1beta1.MsgPauseGroup", group_1.MsgPauseGroup],
        ["/akash.deployment.v1beta1.MsgPauseGroup", group_1.MsgStartGroup],
        ["/akash.market.v1beta1.MsgCreateLease", lease_1.MsgCreateLease],
    ]);
}
class SigningAkashClient extends stargate_1.SigningStargateClient {
    static async connectWithSigner(endpoint, signer) {
        const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(endpoint);
        const options = {
            registry: akashRegistry()
        };
        return new SigningAkashClient(tmClient, signer, options);
    }
    constructor(tmClient, signer, options) {
        super(tmClient, signer, options);
    }
    async certCreateClient(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.cert.v1beta1.MsgCreateCertificate",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async certRevoke(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.cert.v1beta1.MsgRevokeCertificate",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentCreate(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentClose(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentDeposit(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentUpdate(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentGroupClose(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentGroupPause(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentGroupStart(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async marketLeaseCreate(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.market.v1beta1.MsgCreateLease",
            value: value
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
}
exports.SigningAkashClient = SigningAkashClient;
//# sourceMappingURL=signingAkashClient.js.map