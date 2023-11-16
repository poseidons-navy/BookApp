"use client"
import { Wallet } from "lucide-react";
import algosdk from "algosdk";
import { algorandConfig } from "@/algorand/constants";
import { useEffect, useState } from "react";

const algodClient = new algosdk.Algodv2(algorandConfig.algodToken, algorandConfig.algodServer, algorandConfig.algodPort)

interface Props {
    walletAddress: string
}

export default function FetchBalance(props: Props) {
    const [balance, setBalance] = useState(0);

    async function fetchBalance() {
        try {
            const acctInfo = await algodClient.accountInformation(props.walletAddress).do();
            const balance = acctInfo.amount / 1_000_000;
            setBalance(balance)
        } catch (err) {
            console.log(err)
            throw Error("Could Not Get Balance")
        }
    }

    useEffect(()=>{
        (async ()=>{
          await fetchBalance()
        })()
      }, [])

    return (
        <>
            <div className="flex flex-row items-center gap-x-5">
                <Wallet />
                <span className="font-semibold text-lg">
                    Current Balance
                </span>
            </div>
            <span>
                {balance} Algo | {(balance * 0.14).toFixed(2)} USD
            </span>
        </>
    );
}