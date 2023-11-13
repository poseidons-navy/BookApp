"use client"
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


import React from 'react'
import { Publication } from '@prisma/client';

interface Props {
    publication: Publication | null
}

function DocumentSection(props: Props) {
    const { publication } = props 

    const onLoad = () => {
        console.log("loading complete")
    }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-4/5 ">
            <Document file={publication?.file_url} onLoadSuccess={onLoad} >
                <Page pageNumber={5} />
            </Document>
        </div>
    </div>
  )
}

export default DocumentSection