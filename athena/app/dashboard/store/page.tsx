'use client'
import BookDetails from '@/components/book-details'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import NavigationLink from '@/components/ui/navigation-link'

function StorePage() {

  return (
    <div className="flex flex-col w-full items-center pt-5 gap-y-4">
      <h3 className="font-semibold text-xl w-full">
        Books you have published
      </h3>

      <div className="flex cursor-pointer shadow-sm hover:bg-slate-100 flex-col items-center justify-center w-full rounded-md h-[100px] ring-1 ring-amber-50 "
       >
          <NavigationLink title={"Create a new Publication"}
                        link="/dashboard/createbook"
                        icon={PlusIcon} />
      </div>

      <div className="flex flex-row w-full items-center justify-between gap-x-4">
        <Input placeholder='Search for your publicaions by title' />
        <div className="flex flex-row items-center justify-center gap-x-3">
          <Button>
            All
          </Button>
          <Button variant={'outline'} >
            Drafts
          </Button>
          <Button variant={'outline'} >
            Published
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-y-5">
        <BookDetails />
        <BookDetails/>
        <BookDetails/>
        <BookDetails/>
        <BookDetails/>
        <BookDetails/>
        <BookDetails/>
      </div>
    </div>
  )
}

export default StorePage