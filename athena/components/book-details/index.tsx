"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { Button } from '../ui/button'
import { BookOpenText, FileEdit, Heart, MessageCircle } from 'lucide-react'

//ADDED PROPS
interface BookDetailsProps {
    onToggleFavorite: (bookId: string) => void;
    bookId: string;
  }
  function BookDetails({ onToggleFavorite, bookId }: BookDetailsProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggleFavorite = () => {
        setIsFavorite((prev) => !prev);
        //Call the parent comps function to handle favorites
        onToggleFavorite(bookId);
    };

  return (
    <div className="grid grid-cols-5 w-full px-5 py-4 rounded-sm ring-1 ring-amber-100 shadow-md gap-x-4 gap-y-4">

        {/* Book Cover */}
        <div className="w-[120px] h-[180px] overflow-hidden relative ring-1">
            <Image
                src="/book-cover-one.png"
                fill
                style={{
                    objectFit: "cover"
                }}
                alt="book-cover"
            />
        </div>

        {/* Book Details */}
        <div className="flex flex-col col-span-4 gap-y-2 w-full">
            <h3 className='w-full text-xl font-semibold' >
                How to talk, to your humanoid robot for begginers.
            </h3>
            <span className="text-sm text-slate-300">
                by <strong className='text-black cursor-pointer hover:underline' >captain man and kid danger </strong>
            </span>
            <span>
                Ever wondered what those mechanical noises your humanoid robot makes are? ever forgot to change you bot&apos;s oil. Well you are not alone, Henry and I have been dealing with this problem for a while now and we think its time to help the world out. 
            </span>
            <div className="flex flex-row items-center">
                <span>
                    400 A | 23.59 USD
                </span>
            </div>
        </div>

        {/* Action Buttons */}
        <div className=""></div>
        
        {/*Toggle the favorite button*/}
        <Button variant={'outline'} onClick={handleToggleFavorite} >
            {isFavorite ? <Heart fill='red'/> : <Heart/>}
        </Button>

        <Button variant={'outline'} >
            <BookOpenText/>
        </Button>
        <Button variant={'outline'} >
            <MessageCircle/>
        </Button>
        <Button variant={'outline'} >
            <FileEdit/>
        </Button>
    </div>
  )
}

export default BookDetails