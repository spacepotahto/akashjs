import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl } from "./codec/akash/deployment/v1beta1/query";

const deploymentList = async () => {
  // Inside an async function...
  // The Tendermint client knows how to talk to the Tendermint RPC endpoint
  const tendermintClient = await Tendermint34Client.connect("http://rpc.akash.forbole.com:80");

  // The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
  const queryClient = new QueryClient(tendermintClient);

  // This helper function wraps the generic Stargate query client for use by the specific generated query client
  const rpcClient = createProtobufRpcClient(queryClient);

  // Here we instantiate a specific query client which will have the custom methods defined in the .proto file
  const queryService = new QueryClientImpl(rpcClient);

  // Now you can use this service to submit queries
  const queryResult = await queryService.Deployments({});

  return queryResult;
};

deploymentList().then((result) => {
  console.log(result);
});