"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToUint8Array = exports.getPemStrings = exports.encode = exports.deletePEMBlocks = exports.loadPEMBlocks = exports.savePEMBlocks = exports.createPEMBlocks = void 0;
const Certificate_1 = __importDefault(require("pkijs/src/Certificate"));
const AttributeTypeAndValue_1 = __importDefault(require("pkijs/src/AttributeTypeAndValue"));
const BasicConstraints_1 = __importDefault(require("pkijs/src/BasicConstraints"));
const Extension_1 = __importDefault(require("pkijs/src/Extension"));
const ExtKeyUsage_1 = __importDefault(require("pkijs/src/ExtKeyUsage"));
const common_1 = require("pkijs/src/common");
const asn1js = __importStar(require("asn1js"));
const pvutils_1 = require("pvutils");
const idb_keyval_1 = require("idb-keyval");
// Tweaked version of https://github.com/ovrclk/akashjs/blob/main/src/certifcates/generate509.ts
async function createPEMBlocks(address, naf = 365, // certificate is not valid after this many days.
nbf = new Date(), // certificate is not valid before this date.
signAlgorithm = "ECDSA", hashAlgorithm = "SHA-256") {
    const crypto = common_1.getCrypto();
    const algo = common_1.getAlgorithmParameters(signAlgorithm, "generatekey");
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
    const keyPair = await crypto.generateKey(algo.algorithm, true, algo.usages);
    const certificate = new Certificate_1.default();
    certificate.version = 2;
    const serialNumber = Date.now();
    certificate.serialNumber = new asn1js.Integer({ value: serialNumber });
    // const authVersionOID = "2.23.133.2.6";
    // const authVersion = "v0.0.1";
    certificate.issuer.typesAndValues.push(new AttributeTypeAndValue_1.default({
        type: "2.5.4.3",
        value: new asn1js.PrintableString({ value: address })
    }));
    // certificate.issuer.typesAndValues.push(
    //   new AttributeTypeAndValue({
    //     type: authVersionOID,
    //     value: new asn1js.PrintableString({ value: authVersion })
    //   })
    // );
    certificate.subject.typesAndValues.push(new AttributeTypeAndValue_1.default({
        type: "2.5.4.3",
        value: new asn1js.PrintableString({ value: address })
    }));
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
    certificate.extensions.push(new Extension_1.default({
        extnID: "2.5.29.15",
        critical: true,
        extnValue: keyUsage.toBER(false),
        parsedValue: keyUsage, // Parsed value for well-known extensions
    }));
    //endregion
    //region Extended Key Usage
    const extKeyUsage = new ExtKeyUsage_1.default({
        keyPurposes: [
            "1.3.6.1.5.5.7.3.2", // id-kp-clientAuth
        ],
    });
    certificate.extensions.push(new Extension_1.default({
        extnID: "2.5.29.37",
        extnValue: extKeyUsage.toSchema().toBER(false),
        parsedValue: extKeyUsage, // Parsed value for well-known extensions
    }));
    //endregion
    //region "BasicConstraints" extension
    const basicConstr = new BasicConstraints_1.default({
        cA: false,
    });
    certificate.extensions.push(new Extension_1.default({
        extnID: "2.5.29.19",
        critical: true,
        extnValue: basicConstr.toSchema().toBER(false),
        parsedValue: basicConstr, // Parsed value for well-known extensions
    }));
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
}
exports.createPEMBlocks = createPEMBlocks;
;
async function savePEMBlocks(pemBlocks) {
    return idb_keyval_1.set(pemBlocks.owner, pemBlocks);
}
exports.savePEMBlocks = savePEMBlocks;
async function loadPEMBlocks(owner) {
    const pemBlocks = await idb_keyval_1.get(owner);
    if (!pemBlocks) {
        throw new Error('No Certificates found.');
    }
    return pemBlocks;
}
exports.loadPEMBlocks = loadPEMBlocks;
async function deletePEMBlocks(owner, serial) {
    const pemBlocks = await loadPEMBlocks(owner);
    if (pemBlocks && pemBlocks.serialNumber === serial) {
        return idb_keyval_1.del(owner);
    }
}
exports.deletePEMBlocks = deletePEMBlocks;
function encode(pemBlocks) {
    const formatPEM = (pemString) => {
        return pemString.replace(/(.{64})/g, "$1\n");
    };
    return {
        certificate: `-----BEGIN CERTIFICATE-----\n${formatPEM(pvutils_1.toBase64(pvutils_1.arrayBufferToString(pemBlocks.certificate)))}\n-----END CERTIFICATE-----`,
        privateKey: `-----BEGIN PRIVATE KEY-----\n${formatPEM(pvutils_1.toBase64(pvutils_1.arrayBufferToString(pemBlocks.privateKey)))}\n-----END PRIVATE KEY-----`,
        publicKey: `-----BEGIN EC PUBLIC KEY-----\n${formatPEM(pvutils_1.toBase64(pvutils_1.arrayBufferToString(pemBlocks.publicKey)))}\n-----END EC PUBLIC KEY-----`
    };
}
exports.encode = encode;
async function getPemStrings(owner) {
    const pemBlocks = await loadPEMBlocks(owner);
    const pemStrings = encode(pemBlocks);
    return {
        cert: pemStrings.certificate,
        key: pemStrings.privateKey
    };
}
exports.getPemStrings = getPemStrings;
function stringToUint8Array(str) {
    return new Uint8Array(pvutils_1.stringToArrayBuffer(str));
}
exports.stringToUint8Array = stringToUint8Array;
//# sourceMappingURL=certificate.js.map