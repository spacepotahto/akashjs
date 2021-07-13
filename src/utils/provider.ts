import { getPemStrings } from "./certificate";
import { Manifest } from "./deployment";


export interface LeaseID {
  dseq: number,
  gseq: number,
  oseq: number
}

export function leasePath(id: LeaseID): string {
  return `/lease/${id.dseq}/${id.gseq}/${id.oseq}`;
}

export function submitManifestPath(dseq: LeaseID["dseq"]): string {
  return `/deployment/${dseq}/manifest`;
}

export function leaseStatusPath(id: LeaseID): string {
  return `${leasePath(id)}/status`;
}

export function leaseEventsPath(id: LeaseID): string {
  return `${leasePath(id)}/kubeevents`;
}

export function serviceStatusPath(id: LeaseID, service: string): string {
  return `${leasePath(id)}/service/${service}/status`
}

export function serviceLogsPath(id: LeaseID) {
  return `${leasePath(id)}/logs`;
}

export interface ProviderProxyBody {
  providerUri: string,
  cert: string,
  key: string,
  type: 'SEND_MANIFEST' | 'LEASE_STATUS' | 'LEASE_LOGS' | 'LEASE_EVENTS'
  manifest?: Manifest
}

export async function providerGatewayPost(
  uri: string,
  providerUri: string,
  owner: string,
  type: ProviderProxyBody["type"],
  payload: Partial<ProviderProxyBody> = {}
) {
  const pemStrings = await getPemStrings(owner);

  const body = {
    providerUri: providerUri,
    cert: pemStrings.cert,
    key: pemStrings.key,
    type: type,
    manifest: payload.manifest
  } as ProviderProxyBody;

  return fetch(uri, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
}