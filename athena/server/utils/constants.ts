import algosdk from "algosdk";
import MyAlgoConnect from '@randlabs/myalgo-connect';

// config for connecting to algorand
const config = {
    algodToken: "",
    algodServer: "https://testnet-api.algonode.network",
    algodPort: "",
    indexerToken: "",
    indexerServer: "https://testnet-idx.algonode.network",
    indexerPort: "",
}

// Used to perform transactions and retrieve account information
export const algodClient = new algosdk.Algodv2(config.algodToken, config.algodServer, config.algodPort)

// Search blockchain for certain transactions or applications
export const indexerClient = new algosdk.Indexer(config.indexerToken, config.indexerServer, config.indexerPort);

// Connecting algorand wallet
export const myAlgoConnect = new MyAlgoConnect({
    timeout: 100000000,
});