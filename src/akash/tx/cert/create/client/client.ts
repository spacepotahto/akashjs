// import { SigningAkashClient } from "../../../../signingakashclient";

// export interface TxCertCreateParams {
//   memo: string
// }

// export default class Client {
//   private readonly signingClient: SigningAkashClient;

//   constructor(signingClient: SigningAkashClient) {
//     this.signingClient = signingClient;
//   }

//   public async params(params: TxCertCreateParams = { memo: '' }): Promise<MsgCreateCertificateResponse> {
//     const owner = this.signingClient.signer.getAccounts()[0].address;

//     const request: MsgCreateCertificate = {
//       owner: owner,
//       cert: 
//       pubKey: 
//     };

//     return this.signingClient.certCreateClient(
//       accountAddress: owner,
//       value: request,
//       fee: StdFee,
//       memo: params.memo
//     );
//   }
// }