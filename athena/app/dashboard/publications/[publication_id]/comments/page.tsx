import { PageProps } from '@/.next/types/app/layout'
import { Publication, User } from '@prisma/client'
import React from 'react'
import { prisma } from "@/lib/prisma"

async function page(props: PageProps) {
  const publication_id = props.params.publication_id

  let publication: Publication & { creator: User | null } | null = null; 

  try {
    publication = await prisma.
  }
  catch (e)
  {
    // ignore
  }
  return (
    <div className="flex flex-col w-full h-full gap-y-10">

    </div>
  )
}

export default page