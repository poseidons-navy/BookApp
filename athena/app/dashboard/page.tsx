import CopyText from '@/components/copy-text'
import Redirect from '@/components/redirect'
import { getServerAuthSession } from '@/server/auth'
import { isNull } from 'lodash'
import React from 'react'

async function DashboardPage() {
    const session = await getServerAuthSession()
    const user = session?.user
    if(isNull(user?.walletAddress)) {
        return <Redirect 
            link='/setup-wallet'
        />
    }
  return (
    <div className="flex flex-col items-center justify-centet w-full space-y-10 px-2 pb-[100px]">
        <div className="flex flex-col w-full space-y-5">
                <h2 className='text-xl font-semibold' >
                    Credentials
                </h2>
                <div className="flex flex-col w-full space-y-2">

                    <CopyText
                        text={user?.walletAddress ?? ""}
                        title={"Account Address"}
                        icon='BookUser'
                        defaultView
                    />
                    
                </div>

            </div>
    </div>
  )
}

export default DashboardPage