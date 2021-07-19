import { BankExtension, StdFee } from "@cosmjs/stargate";
import { ProviderLeaseStatus } from "./providerLeaseStatus";
import { ProviderSendManifest } from "./providerSendManifest";
import { QueryAuditGet } from "./queryAuditGet";
import { QueryAuditList } from "./queryAuditList";
import { QueryCertList } from "./queryCertList";
import { QueryDeploymentGet } from "./queryDeploymentGet";
import { QueryDeploymentGroupGet } from "./queryDeploymentGroupGet";
import { QueryDeploymentList } from "./queryDeploymentList";
import { QueryMarketBidGet } from "./queryMarketBidGet";
import { QueryMarketBidList } from "./queryMarketBidList";
import { QueryMarketLeaseGet } from "./queryMarketLeaseGet";
import { QueryMarketLeaseList } from "./queryMarketLeaseList";
import { QueryMarketOrderGet } from "./queryMarketOrderGet";
import { QueryMarketOrderList } from "./queryMarketOrderList";
import { QueryProviderGet } from "./queryProviderGet";
import { QueryProviderList } from "./queryProviderList";
import { TxCertCreateClient } from "./txCertCreateClient";
import { TxCertRevoke } from "./txCertRevoke";
import { TxDeploymentClose } from "./txDeploymentClose";
import { TxDeploymentCreate } from "./txDeploymentCreate";
import { TxDeploymentDeposit } from "./txDeploymentDeposit";
import { TxDeploymentGroupClose } from "./txDeploymentGroupClose";
import { TxDeploymentGroupPause } from "./txDeploymentGroupPause";
import { TxDeploymentGroupStart } from "./txDeploymentGroupStart";
import { TxDeploymentUpdate } from "./txDeploymentUpdate";
import { TxMarketLeaseCreate } from "./txMarketLeaseCreate";
export interface TxParams {
    memo?: string;
    fee?: StdFee;
}
export interface QueryCmd {
    audit: {
        get: QueryAuditGet;
        list: QueryAuditList;
    };
    bank: BankExtension["bank"];
    cert: {
        list: QueryCertList;
    };
    deployment: {
        get: QueryDeploymentGet;
        group: {
            get: QueryDeploymentGroupGet;
        };
        list: QueryDeploymentList;
    };
    market: {
        bid: {
            get: QueryMarketBidGet;
            list: QueryMarketBidList;
        };
        lease: {
            get: QueryMarketLeaseGet;
            list: QueryMarketLeaseList;
        };
        order: {
            get: QueryMarketOrderGet;
            list: QueryMarketOrderList;
        };
    };
    provider: {
        get: QueryProviderGet;
        list: QueryProviderList;
    };
}
export interface TxCmd {
    cert: {
        create: {
            client: TxCertCreateClient;
        };
        revoke: TxCertRevoke;
    };
    deployment: {
        close: TxDeploymentClose;
        create: TxDeploymentCreate;
        deposit: TxDeploymentDeposit;
        group: {
            close: TxDeploymentGroupClose;
            pause: TxDeploymentGroupPause;
            start: TxDeploymentGroupStart;
        };
        update: TxDeploymentUpdate;
    };
    market: {
        lease: {
            create: TxMarketLeaseCreate;
        };
    };
}
export interface ProviderCmd {
    sendManifest: ProviderSendManifest;
    leaseStatus: ProviderLeaseStatus;
}
