import Certificate from "pkijs/src/Certificate";
import AttributeTypeAndValue from "pkijs/src/AttributeTypeAndValue";
import BasicConstraints from "pkijs/src/BasicConstraints";
import Extension from "pkijs/src/Extension";
import ExtKeyUsage from "pkijs/src/ExtKeyUsage";
import {
  getAlgorithmParameters,
  getCrypto
} from "pkijs/src/common";
import * as asn1js from "asn1js";
import { arrayBufferToString, toBase64, stringToArrayBuffer } from "pvutils";
import { del, get, set } from 'idb-keyval';

export interface PEMBlocks {
  owner: string,
  serialNumber: number,
  certificate: ArrayBuffer
  privateKey: ArrayBuffer,
  publicKey: ArrayBuffer
}

// Tweaked version of https://github.com/ovrclk/akashjs/blob/main/src/certifcates/generate509.ts
export async function createPEMBlocks(
  address: string,
  naf = 365, // certificate is not valid after this many days.
  nbf = new Date(), // certificate is not valid before this date.
  signAlgorithm = "ECDSA",
  hashAlgorithm = "SHA-256"
): Promise<PEMBlocks> {
  const crypto = getCrypto() as SubtleCrypto;
  const algo = getAlgorithmParameters(signAlgorithm, "generatekey");

  // Note that golang version further password protects the private key
  // with a signature generated from using the account's key to sign its address.
  //
  // TODO: Figure out security, which may involve enhancements on the golang version.
  // Ideally the user would download and add the certificate to the OS's keychain so that
  // the browser can pick it up for SSL, but we can't do that due to the limitation of
  // Chrome and certificates with "keyUsage = keyEncipherment, dataEncipherment", which is the case
  // on the provider generated certificate (see https://superuser.com/questions/1451895/err-ssl-key-usage-incompatible-solution).
  // There is absolutely no way to POST from Chrome to the provider gateway due to this; we'll get "ERR_SSL_KEY_USAGE_INCOMPATIBLE".
  //
  // For now, strategy is to have a proxy that sits between the client and the provider, and the proxy will
  // POST to the provider gateway. But this means we can't even set 'extractable' to false here for better security,
  // because we need to be able to export the keys and send them to the proxy. And having a proxy
  // introduces another attack surface.
  // 
  // Also, the golang version doesn't seem to be doing true mTLS that involves a CA. The provider gateway
  // sets InsecureSkipVerify to true and relies on VerifyPeerCertificate to (superficially?) compare the client's certificate
  // against the one on chain. This feels attackable.
  //
  // Need to think about this more...
  const keyPair = await crypto.generateKey(algo.algorithm, true, algo.usages) as CryptoKeyPair;

  const certificate = new Certificate();
  certificate.version = 2;
  const serialNumber = Date.now();
  certificate.serialNumber = new asn1js.Integer({ value: serialNumber });
  
  // const authVersionOID = "2.23.133.2.6";
  // const authVersion = "v0.0.1";

  certificate.issuer.typesAndValues.push(
    new AttributeTypeAndValue({
      type: "2.5.4.3", // Common name
      value: new asn1js.PrintableString({ value: address })
    })
  );

  // certificate.issuer.typesAndValues.push(
  //   new AttributeTypeAndValue({
  //     type: authVersionOID,
  //     value: new asn1js.PrintableString({ value: authVersion })
  //   })
  // );

  certificate.subject.typesAndValues.push(
    new AttributeTypeAndValue({
      type: "2.5.4.3", // Common name
      value: new asn1js.PrintableString({ value: address })
    })
  );

  // certificate.subject.typesAndValues.push(
  //   new AttributeTypeAndValue({
  //     type: authVersionOID,
  //     value: new asn1js.PrintableString({ value: authVersion })
  //   })
  // );
  
  certificate.notBefore.value = nbf;
  certificate.notAfter.value = new Date(nbf.getTime() + naf * 24 * 60 * 60 * 1000);

  certificate.extensions = [];

  //region "KeyUsage" extension
  const bitArray = new ArrayBuffer(1);
  const bitView = new Uint8Array(bitArray);

  bitView[0] |= 0x10; //data encypherment
  bitView[0] |= 0x20; //key Encipherment

  const keyUsage = new asn1js.BitString({ valueHex: bitArray });

  certificate.extensions.push(
    new Extension({
      extnID: "2.5.29.15",
      critical: true,
      extnValue: keyUsage.toBER(false),
      parsedValue: keyUsage, // Parsed value for well-known extensions
    })
  );
  //endregion

  //region Extended Key Usage
  const extKeyUsage = new ExtKeyUsage({
    keyPurposes: [
      "1.3.6.1.5.5.7.3.2", // id-kp-clientAuth
    ],
  });

  certificate.extensions.push(
    new Extension({
      extnID: "2.5.29.37",
      extnValue: extKeyUsage.toSchema().toBER(false),
      parsedValue: extKeyUsage, // Parsed value for well-known extensions
    })
  );
  //endregion

  //region "BasicConstraints" extension
  const basicConstr = new BasicConstraints({
    cA: false,
  });

  certificate.extensions.push(
    new Extension({
      extnID: "2.5.29.19",
      critical: true,
      extnValue: basicConstr.toSchema().toBER(false),
      parsedValue: basicConstr, // Parsed value for well-known extensions
    })
  );
  //endregion

  await certificate.subjectPublicKeyInfo.importKey(keyPair.publicKey);
  await certificate.sign(keyPair.privateKey, hashAlgorithm);

  return {
    owner: address,
    serialNumber: serialNumber,
    certificate: certificate.toSchema(true).toBER(false),
    privateKey: await crypto.exportKey("pkcs8", keyPair.privateKey),
    publicKey: await crypto.exportKey("spki", keyPair.publicKey)
  };
};

export async function savePEMBlocks(pemBlocks: PEMBlocks): Promise<void> {
  return set(pemBlocks.owner, pemBlocks);
}

export async function loadPEMBlocks(owner: string): Promise<PEMBlocks> {
  const pemBlocks = await get(owner);
  if (!pemBlocks) {
    throw new Error('No Certificates found.');
  }
  return pemBlocks;
}

export async function deletePEMBlocks(owner: string, serial: number): Promise<void> {
  const pemBlocks = await loadPEMBlocks(owner);
  if (pemBlocks && pemBlocks.serialNumber === serial) {
    return del(owner);
  }
}

export function encode(pemBlocks: PEMBlocks) {
  const formatPEM = (pemString: string) => {
    return pemString.replace(/(.{64})/g, "$1\n");
  }
  
  return {
    certificate: `-----BEGIN CERTIFICATE-----\n${formatPEM(
      toBase64(arrayBufferToString(pemBlocks.certificate))
    )}\n-----END CERTIFICATE-----`,
    privateKey: `-----BEGIN PRIVATE KEY-----\n${formatPEM(
      toBase64(arrayBufferToString(pemBlocks.privateKey))
    )}\n-----END PRIVATE KEY-----`,
    publicKey: `-----BEGIN EC PUBLIC KEY-----\n${formatPEM(
      toBase64(arrayBufferToString(pemBlocks.publicKey))
    )}\n-----END EC PUBLIC KEY-----`
  }
}

export async function getPemStrings(owner: string) {
  const pemBlocks = await loadPEMBlocks(owner);
  const pemStrings = encode(pemBlocks);
  return {
    cert: pemStrings.certificate,
    key: pemStrings.privateKey
  }
}

export function stringToUint8Array(str: string): Uint8Array {
  return new Uint8Array(stringToArrayBuffer(str));
}