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

export const minRound = 29556983;

// https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md
export const bookAppNote = "build_a_bull:athena:v1"

// Maximum local storage allocation, immutable
export const numLocalInts = 0;
export const numLocalBytes = 0;
// Maximum global storage allocation, immutable
export const numGlobalInts = 2; // Global variables stored as Int: count, sold
export const numGlobalBytes = 3;