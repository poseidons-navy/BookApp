import CopyText from '@/components/copy-text'
import DecryptPrivateKey from '@/components/decrypt-private-key'
import FetchBalance from '@/components/fetch_balance/fetch'
import Redirect from '@/components/redirect'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getServerAuthSession } from '@/server/auth'
import { getPurchasedBooks } from '@/server/publication'
import { isNull } from 'lodash'
import { HistoryIcon} from 'lucide-react'
import React from 'react'
// import { fetchBalance } from '@/server/publication'

async function DashboardPage() {
    const session = await getServerAuthSession()
    const user = session?.user
    // let publications: Array<Publication & { creator: User | null } | null> = []
    // let purchaseHistory: Array<Purchase & {creator: User | null} | null> = []
    let purchaseHistory: Array<any> = [];
    let balance = 0;
    if(isNull(user?.walletAddress)) {
        return <Redirect 
            link='/setup-wallet'
        />
    }

    try {
        // publications = await getFavouritePublications()
        purchaseHistory = await getPurchasedBooks(undefined, "published");
        // balance = await fetchBalance();
        // balance = balance / 1_000_000
    }
    catch(e)
    {
        
    }


  return (
    <div className="flex flex-col items-center justify-centet w-full space-y-10 px-2 pb-[100px]">

        {/* Wallet Section */}
        <div className="flex flex-col w-full space-y-5 ring-1 ring-amber-100 rounded-md shadow-lg px-5 py-5 ">
                <h2 className='text-xl font-semibold' >
                    Your Wallet
                </h2>
                <div className="grid grid-cols-4 w-full gap-y-4">
                    <div className="col-span-4 flex flex-row items-center justify-between">
                        <FetchBalance walletAddress={user.walletAddress}/>
                    </div>
                    <CopyText
                        className='col-span-4'
                        text={user?.walletAddress ?? ""}
                        title={"Account Address"}
                        icon='BookUser'
                        defaultView
                    />
                    <DecryptPrivateKey visible={true}/>
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
                            Genre
                        </TableHead>
                        <TableHead>
                            Price in USD
                        </TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {purchaseHistory.map((elem, index) => {
                        return <TableRow key={index}>
                            <TableCell>{elem.name}</TableCell>
                            <TableCell>{elem.creator.name}</TableCell>
                            <TableCell>{elem.genre}</TableCell>
                            <TableCell>{elem.price}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>

        </div>        
    </div>
  )
}

export default DashboardPage