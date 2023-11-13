import { PageProps } from '@/.next/types/app/layout';
import DocumentSection from '@/components/document'
import React from 'react'

async function ReadPage(props: PageProps) {

  const { params, searchParams } = props 
  const publication_id = params.publication_id

  let publication: any = null;

    try {
        publication = await prisma?.publication.findFirst({
            where: {
                id: publication_id
            },
            include: {
                creator: true
            }
        })

        publication = publication ?? null
    }
    catch (e)
    {
        // ignore
    }
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <DocumentSection publication={publication} />
    </div>
  )
}

export default ReadPage