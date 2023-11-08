import BookDetails from '@/components/book-details'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function MarketPage() {
  return (
    <div className="flex flex-col items-center w-screen h-full px-5 py-10">
        <div className="h-full w-4/5 flex flex-col items-center gap-y-4 ">

             {/* Search bar */}
            <div className="flex flex-col items-center justify-start gap-y-3 w-full">
                <Input placeholder='Search by title or publisher' />
                <div className="flex flex-row items-center justify-center gap-x-4">
                    <Button>
                        All
                    </Button>
                    <Button variant={"outline"} >
                        Development
                    </Button>
                    <Button variant={"outline"} >
                        Manga
                    </Button>
                    <Button variant={"outline"} >
                        Music
                    </Button>
                    <Button variant={"outline"} >
                        Elon Musk
                    </Button>
                </div>
            </div>

            {/* Books */}
            <div className="flex flex-col w-full items-center justify-start gap-y-4">
                <BookDetails/>
                <BookDetails/>
                <BookDetails/>
                <BookDetails/>
                <BookDetails/>
                <BookDetails/>
            </div>
        </div>
    </div>
  )
}

export default MarketPage