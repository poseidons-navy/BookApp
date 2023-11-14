import algosdk from "algosdk";
import {
    algodClient,
    indexerClient,
    bookAppNote,
    minRound,
    myAlgoConnect,
    numGlobalBytes,
    numGlobalInts,
    numLocalBytes,
    numLocalInts
} from "./constants";
/* eslint import/no-webpack-loader-syntax: off */
import approvalProgram from "!!raw-loader!../contracts/bookshop_approval.teal";
import clearProgram from "!!raw-loader!../contracts/bookshop_clear.teal";
import {base64ToUTF8String, utf8ToBase64String} from "./conversions";
global.Buffer = global.Buffer || require('buffer').Buffer

class Book {
    name: string
    image: string
    price: number
    sold: boolean
    appId: number
    owner: string
    book_id: string

    constructor(name: string, image: string, price: number, sold: boolean, appId: number, owner: string, book_id: string) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.sold = sold;
        this.appId = appId;
        this.book_id = book_id
        this.owner = owner;
    }
}

// Compile smart contract in .teal format to program
const compileProgram = async (programSource) => {
    let encoder = new TextEncoder();
    let programBytes = encoder.encode(programSource);
    let compileResponse = await algodClient.compile(programBytes).do();
    return new Uint8Array(Buffer.from(compileResponse.result, "base64"));
}

// CREATE PRODUCT: ApplicationCreateTxn
export const createProductAction = async (senderAddress: string, book: Book) => {
    console.log("Adding book...")

    if(book.image?.length > 30) {
        throw new Error("Image text is too long. Try a shorter url")
    }

    let params = await algodClient.getTransactionParams().do();
    params.fee = algosdk.ALGORAND_MIN_TX_FEE;
    params.flatFee = true;

    // Compile programs
    const compiledApprovalProgram = await compileProgram(approvalProgram)
    const compiledClearProgram = await compileProgram(clearProgram)

    // Build note to identify transaction later and required app args as Uint8Arrays
    let note = new TextEncoder().encode(bookAppNote);
    let name = new TextEncoder().encode(book.name);
    let image = new TextEncoder().encode(book.image);
    let book_id = new TextEncoder().encode(book.book_id);
    let price = algosdk.encodeUint64(book.price);

    let appArgs = [name, book_id, image, price]

    // Create ApplicationCreateTxn
    let txn = algosdk.makeApplicationCreateTxnFromObject({
        from: senderAddress,
        suggestedParams: params,
        onComplete: algosdk.OnApplicationComplete.NoOpOC,
        approvalProgram: compiledApprovalProgram,
        clearProgram: compiledClearProgram,
        numLocalInts: numLocalInts,
        numLocalByteSlices: numLocalBytes,
        numGlobalInts: numGlobalInts,
        numGlobalByteSlices: numGlobalBytes,
        note: note,
        appArgs: appArgs
    });

    // Get transaction ID
    let txId = txn.txID().toString();

    // Sign & submit the transaction
    let signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
    console.log("Signed transaction with txID: %s", txId);
    await algodClient.sendRawTransaction(signedTxn.blob).do();

    // Wait for transaction to be confirmed
    let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);

    // Get the completed Transaction
    console.log("Transaction " + txId + " confirmed in round " + confirmedTxn["confirmed-round"]);

    // Get created application id and notify about completion
    let transactionResponse = await algodClient.pendingTransactionInformation(txId).do();
    let appId = transactionResponse['application-index'];
    console.log("Created new app-id: ", appId);
    return appId;
}