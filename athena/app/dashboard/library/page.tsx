import BookDetails from '@/components/book-details'
import { Input } from '@/components/ui/input'
import React from 'react'

function Library() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-4">
        <div className="flex flex-row items-center justify-between w-full">
          <Input placeholder='Search by book title or @the-author-username' />
        </div>
        <p className='w-full text-left' >
          You have a good eye for quality books :)
        </p>
        <div className="flex flex-col w-full h-full items-center gap-y-4">
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

export default Library
//books section