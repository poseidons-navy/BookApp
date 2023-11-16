"use server"
import { prisma } from "@/lib/prisma"
import algosdk from "algosdk"
import { encryptPrivateKey } from "@/lib/utils"
import { getServerAuthSession } from "./auth"

export const createAccount = async (encryptionPassword: string) => {
    const session = await getServerAuthSession()
    const account = algosdk.generateAccount()   

    const encryptedPrivateKey = encryptPrivateKey(encryptionPassword, account.sk)


    const user = await prisma.user.update({
        where: {
            id: session?.user.id
        },
        data: {
            walletAddress: account.addr,
            encryptedPrivateKey,
            publicKey: account.addr
        }
    })

    return user


}