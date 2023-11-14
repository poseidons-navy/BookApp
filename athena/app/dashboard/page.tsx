"use client"
import BookDetails from '@/components/book-details'
import CopyText from '@/components/copy-text'
import Redirect from '@/components/redirect'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getServerAuthSession } from '@/server/auth'
import { getFavouritePublications } from '@/server/publication'
import { Publication, User } from '@prisma/client'
import { isNull } from 'lodash'
import { HistoryIcon, Wallet, Heart } from 'lucide-react'
import React from 'react'
import { LocalStorageKeys } from '../helpers/local_storage_keys'
// import { useContext } from 'react'
// import {AppContext} from '../app-context'

function DashboardPage() {
    // const appContext = useContext(AppContext);
    // const session = await getServerAuthSession()
    // const user = session?.user
    // let publications: Array<Publication & { creator: User | null } | null> = []
    // if(isNull(user?.walletAddress)) {
    //     return <Redirect 
    //         link='/setup-wallet'
    //     />
    // }

    // try {
    //     publications = await getFavouritePublications()
    // }
    // catch(e)
    // {

    // }
    const address = localStorage.getItem(LocalStorageKeys.USER_ADDRESS);

  return (
    <div className="flex flex-col items-center justify-centet w-full space-y-10 px-2 pb-[100px]">
        {/* Wallet Section */}
        <div className="flex flex-col w-full space-y-5 ring-1 ring-amber-100 rounded-md shadow-lg px-5 py-5 ">
                <h2 className='text-xl font-semibold' >
                    Your Wallet
                </h2>
                <div className="grid grid-cols-4 w-full gap-y-4">
                    <div className="col-span-4 flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-x-5">
                            <Wallet/>
                            <span className="font-semibold text-lg">
                                Current Balance
                            </span>
                        </div>
                        <span>
                            0 Algo something .. | 30 USD
                        </span>
                    </div>
                    <CopyText
                        className='col-span-4'
                        text={address ?? ""}
                        title={"Account Address"}
                        icon='BookUser'
                        defaultView
                    />
                    
                    <Button  className='col-span-1' >
                        Withdraw
                    </Button>
                </div>
        </div>

        {/* Purchase History */}
        <div className="flex flex-col gap-y-4 w-full px-5 py-5">
            <div className="flex flex-row items-center gap-x-4 w-full">
                    <HistoryIcon stroke='gray' />
                    <h2 className="text-lg font-semibold">
                        Purchase History
                    </h2>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Book
                        </TableHead>
                        <TableHead>
                            Author
                        </TableHead>
                        <TableHead>
                            TxnHash
                        </TableHead>
                        <TableHead>
                            Price in USD
                        </TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>

                </TableBody>
            </Table>

        </div>

        {/* Favourites */}
        <div className="flex flex-col gap-y-4 w-full px-5 py-5">
            <div className="flex flex-row items-center gap-x-4">
                <Heart fill="red" stroke='red' />
                <h2 className="text-lg font-semibold">
                    Your favourite reads.
                </h2>
            </div>
            <div className="flex flex-col w-full gap-y-5">
                {
                    // publications?.map((publication, i)=> {
                    //     return  (
                    //     <BookDetails
                    //         key={i}
                    //         // @ts-ignore
                    //         publication={publication}
                    //     />
                    //     )
                    // })
                }
            </div>
        </div>

        
    </div>
  )
}

export default DashboardPage