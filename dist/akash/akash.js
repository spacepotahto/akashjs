"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Akash = exports.defaultFee = exports.denom = void 0;
const stargate_1 = require("@cosmjs/stargate");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const signingAkashClient_1 = require("./signingAkashClient");
const query_1 = require("../codec/akash/audit/v1beta1/query");
const query_2 = require("../codec/akash/cert/v1beta1/query");
const query_3 = require("../codec/akash/deployment/v1beta1/query");
const query_4 = require("../codec/akash/market/v1beta1/query");
const query_5 = require("../codec/akash/provider/v1beta1/query");
const queryAuditGet_1 = require("./queryAuditGet");
const queryAuditList_1 = require("./queryAuditList");
const queryCertList_1 = require("./queryCertList");
const queryDeploymentGet_1 = require("./queryDeploymentGet");
const queryDeploymentList_1 = require("./queryDeploymentList");
const queryDeploymentGroupGet_1 = require("./queryDeploymentGroupGet");
const queryMarketBidGet_1 = require("./queryMarketBidGet");
const queryMarketBidList_1 = require("./queryMarketBidList");
const queryMarketLeaseGet_1 = require("./queryMarketLeaseGet");
const queryMarketLeaseList_1 = require("./queryMarketLeaseList");
const queryMarketOrderGet_1 = require("./queryMarketOrderGet");
const queryMarketOrderList_1 = require("./queryMarketOrderList");
const queryProviderGet_1 = require("./queryProviderGet");
const queryProviderList_1 = require("./queryProviderList");
const txCertRevoke_1 = require("./txCertRevoke");
const txCertCreateClient_1 = require("./txCertCreateClient");
const txDeploymentClose_1 = require("./txDeploymentClose");
const txDeploymentDeposit_1 = require("./txDeploymentDeposit");
const txDeploymentCreate_1 = require("./txDeploymentCreate");
const txDeploymentUpdate_1 = require("./txDeploymentUpdate");
const txDeploymentGroupClose_1 = require("./txDeploymentGroupClose");
const txDeploymentGroupPause_1 = require("./txDeploymentGroupPause");
const txDeploymentGroupStart_1 = require("./txDeploymentGroupStart");
const txMarketLeaseCreate_1 = require("./txMarketLeaseCreate");
const providerSendManifest_1 = require("./providerSendManifest");
const providerLeaseStatus_1 = require("./providerLeaseStatus");
exports.denom = "uakt";
exports.defaultFee = {
    amount: [
        {
            denom: exports.denom,
            amount: "5000",
        }
    ],
    gas: "200000"
};
class Akash {
    constructor(tmClient, signingClient, address) {
        this.address = address;
        this.tmClient = tmClient;
        this.signingClient = signingClient;
        const queryClient = new stargate_1.QueryClient(tmClient);
        const rpcClient = stargate_1.createProtobufRpcClient(queryClient);
        const auditQueryClientImpl = new query_1.QueryClientImpl(rpcClient);
        const certQueryClientImpl = new query_2.QueryClientImpl(rpcClient);
        const deploymentQueryClientImpl = new query_3.QueryClientImpl(rpcClient);
        const marketQueryClientImpl = new query_4.QueryClientImpl(rpcClient);
        const providerQueryClientImpl = new query_5.QueryClientImpl(rpcClient);
        const bankQueryClient = stargate_1.QueryClient.withExtensions(tmClient, stargate_1.setupBankExtension);
        // TODO: Use QueryClient.withExtensions instead, see bottom of
        // https://github.com/cosmos/cosmjs/blob/main/packages/stargate/CUSTOM_PROTOBUF_CODECS.md
        this.query = {
            audit: {
                get: new queryAuditGet_1.QueryAuditGet(auditQueryClientImpl),
                list: new queryAuditList_1.QueryAuditList(auditQueryClientImpl)
            },
            bank: bankQueryClient.bank,
            cert: {
                list: new queryCertList_1.QueryCertList(certQueryClientImpl)
            },
            deployment: {
                get: new queryDeploymentGet_1.QueryDeploymentGet(deploymentQueryClientImpl),
                group: {
                    get: new queryDeploymentGroupGet_1.QueryDeploymentGroupGet(deploymentQueryClientImpl)
                },
                list: new queryDeploymentList_1.QueryDeploymentList(deploymentQueryClientImpl)
            },
            market: {
                bid: {
                    get: new queryMarketBidGet_1.QueryMarketBidGet(marketQueryClientImpl),
                    list: new queryMarketBidList_1.QueryMarketBidList(marketQueryClientImpl)
                },
                lease: {
                    get: new queryMarketLeaseGet_1.QueryMarketLeaseGet(marketQueryClientImpl),
                    list: new queryMarketLeaseList_1.QueryMarketLeaseList(marketQueryClientImpl)
                },
                order: {
                    get: new queryMarketOrderGet_1.QueryMarketOrderGet(marketQueryClientImpl),
                    list: new queryMarketOrderList_1.QueryMarketOrderList(marketQueryClientImpl)
                }
            },
            provider: {
                get: new queryProviderGet_1.QueryProviderGet(providerQueryClientImpl),
                list: new queryProviderList_1.QueryProviderList(providerQueryClientImpl)
            }
        };
        this.tx = {
            cert: {
                create: {
                    client: new txCertCreateClient_1.TxCertCreateClient(this)
                },
                revoke: new txCertRevoke_1.TxCertRevoke(this)
            },
            deployment: {
                close: new txDeploymentClose_1.TxDeploymentClose(this),
                create: new txDeploymentCreate_1.TxDeploymentCreate(this),
                deposit: new txDeploymentDeposit_1.TxDeploymentDeposit(this),
                group: {
                    close: new txDeploymentGroupClose_1.TxDeploymentGroupClose(this),
                    pause: new txDeploymentGroupPause_1.TxDeploymentGroupPause(this),
                    start: new txDeploymentGroupStart_1.TxDeploymentGroupStart(this)
                },
                update: new txDeploymentUpdate_1.TxDeploymentUpdate(this)
            },
            market: {
                lease: {
                    create: new txMarketLeaseCreate_1.TxMarketLeaseCreate(this)
                }
            }
        };
        this.provider = {
            sendManifest: new providerSendManifest_1.ProviderSendManifest(this),
            leaseStatus: new providerLeaseStatus_1.ProviderLeaseStatus(this)
        };
    }
    static async connect(endpoint, signer) {
        const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(endpoint);
        const signingClient = await signingAkashClient_1.SigningAkashClient.connectWithSigner(endpoint, signer);
        const accounts = await signer.getAccounts();
        const address = accounts[0].address;
        return new Akash(tmClient, signingClient, address);
    }
}
exports.Akash = Akash;
//# sourceMappingURL=akash.js.map