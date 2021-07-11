import { OfflineSigner } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { SigningAkashClient } from "./signingAkashClient";
import { QueryCmd, TxCmd } from "./types";

import { QueryClientImpl as AuditQueryClientImpl } from "../codec/akash/audit/v1beta1/query";
import { QueryClientImpl as CertQueryClientImpl } from "../codec/akash/cert/v1beta1/query";
import { QueryClientImpl as DeploymentQueryClientImpl } from "../codec/akash/deployment/v1beta1/query";
import { QueryClientImpl as MarketQueryClientImpl } from "../codec/akash/market/v1beta1/query";
import { QueryClientImpl as ProviderQueryClientImpl } from "../codec/akash/provider/v1beta1/query";
import { QueryAuditGet } from "./queryAuditGet";
import { QueryAuditList } from "./queryAuditList";
import { QueryCertList } from "./queryCertList";
import { QueryDeploymentGet } from "./queryDeploymentGet";
import { QueryDeploymentList } from "./queryDeploymentList";
import { QueryDeploymentGroupGet } from "./queryDeploymentGroupGet";
import { QueryMarketBidGet } from "./queryMarketBidGet";
import { QueryMarketBidList } from "./queryMarketBidList";
import { QueryMarketLeaseGet } from "./queryMarketLeaseGet";
import { QueryMarketLeaseList } from "./queryMarketLeaseList";
import { QueryMarketOrderGet } from "./queryMarketOrderGet";
import { QueryMarketOrderList } from "./queryMarketOrderList";
import { QueryProviderGet } from "./queryProviderGet";
import { QueryProviderList } from "./queryProviderList";

import { TxCertRevoke } from "./txCertRevoke";
import { TxCertCreateClient } from "./txCertCreateClient";
import { TxDeploymentClose } from "./txDeploymentClose";
import { TxDeploymentDeposit } from "./txDeploymentDeposit";
import { TxDeploymentCreate } from "./txDeploymentCreate";

export const denom = "uakt";

export const defaultFee: StdFee = {
  amount: [
    {
      denom: denom,
      amount: "5000",
    }
  ],
  gas: "200000"
};

export class Akash {
  public readonly address: string;
  public readonly tmClient: Tendermint34Client
  public readonly signingClient: SigningAkashClient;

  public readonly query: QueryCmd;
  public readonly tx: TxCmd;

  public static async connect(
    endpoint: string,
    signer: OfflineSigner
  ): Promise<Akash> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    const signingClient = await SigningAkashClient.connectWithSigner(endpoint, signer);
    const accounts = await signer.getAccounts();
    const address = accounts[0].address;
    return new Akash(tmClient, signingClient, address);
  }

  constructor(
    tmClient: Tendermint34Client,
    signingClient: SigningAkashClient,
    address: string
  ) {
    this.address = address;
    this.tmClient = tmClient;
    this.signingClient = signingClient;

    const queryClient = new QueryClient(tmClient);
    const rpcClient = createProtobufRpcClient(queryClient);

    const auditQueryClientImpl = new AuditQueryClientImpl(rpcClient);
    const certQueryClientImpl = new CertQueryClientImpl(rpcClient);
    const deploymentQueryClientImpl = new DeploymentQueryClientImpl(rpcClient);
    const marketQueryClientImpl = new MarketQueryClientImpl(rpcClient);
    const providerQueryClientImpl = new ProviderQueryClientImpl(rpcClient);

    // TODO: Use QueryClient.withExtensions instead, see bottom of
    // https://github.com/cosmos/cosmjs/blob/main/packages/stargate/CUSTOM_PROTOBUF_CODECS.md
    this.query = {
      audit: {
        get: new QueryAuditGet(auditQueryClientImpl),
        list: new QueryAuditList(auditQueryClientImpl)
      },
      cert: {
        list: new QueryCertList(certQueryClientImpl)
      },
      deployment: {
        get: new QueryDeploymentGet(deploymentQueryClientImpl),
        group: {
          get: new QueryDeploymentGroupGet(deploymentQueryClientImpl)
        },
        list: new QueryDeploymentList(deploymentQueryClientImpl)
      },
      market: {
        bid: {
          get: new QueryMarketBidGet(marketQueryClientImpl),
          list: new QueryMarketBidList(marketQueryClientImpl)
        },
        lease: {
          get: new QueryMarketLeaseGet(marketQueryClientImpl),
          list: new QueryMarketLeaseList(marketQueryClientImpl)
        },
        order: {
          get: new QueryMarketOrderGet(marketQueryClientImpl),
          list: new QueryMarketOrderList(marketQueryClientImpl)
        }
      },
      provider: {
        get: new QueryProviderGet(providerQueryClientImpl),
        list: new QueryProviderList(providerQueryClientImpl)
      }
    };

    this.tx = {
      cert: {
        create: {
          client: new TxCertCreateClient(this)
        },
        revoke: new TxCertRevoke(this)
      },
      deployment: {
        close: new TxDeploymentClose(this),
        create: new TxDeploymentCreate(this),
        deposit: new TxDeploymentDeposit(this),
        // group: {
        //   close: {},
        //   pause: {},
        //   start: {}
        // },
        update: {}
      }
    }
  }
}