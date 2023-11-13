"use client";
import BookDetails from '@/components/book-details'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getCurrentUserPublications } from '@/server/publication';
import { Publication, User } from '@prisma/client';
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function StorePage() {
  const [{ data, loading }, setPublications] = useState<{ data: Array<Publication & { creator: User | null }>, loading: boolean }>({
    data: [],
    loading: false
  })


  const loadStoreData = async () => {
    setPublications((prev)=>{
      return {
        ...prev,
        loading: true
      }
    })
    try {
      const publications = await getCurrentUserPublications()

      setPublications((prev)=>{
        return {
          ...prev,
          data: publications
        }
      })
    }
    catch(e)
    {
      // ignore
    }
    finally
    {
      setPublications((prev)=>{
        return {
          ...prev,
          loading: false
        }
      })
    }
  }


  useEffect(()=>{
    (async ()=>{
      await loadStoreData()
    })()
  }, [])

  return (
    <div className="flex flex-col w-full items-center pt-5 gap-y-4">
      <h3 className="font-semibold text-xl w-full">
        Books you have published
      </h3>
 
      <Link href="/dashboard/store/new" legacyBehavior >
        <div className="flex cursor-pointer shadow-sm hover:bg-slate-100 flex-col items-center justify-center w-full rounded-md h-[100px] ring-1 ring-amber-50 ">

            <PlusIcon />
            <span>
              Create a new publication
            </span>
        </div>
      </Link>

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
        {
          data?.map((publication, i)=> {
            return  (
              <BookDetails
                key={i}
                publication={publication}
              />
            )
          })
        }
        {/* <BookDetails/>
        <BookDetails/>
        <BookDetails/>
        <BookDetails/>
        <BookDetails/>
        <BookDetails/>
        <BookDetails/> */}
      </div>
    </div>
  )
}

export default StorePage