"use client"
import BookDetails from '@/components/book-details'
import Redirect from '@/components/redirect'
import { getServerAuthSession } from '@/server/auth'
import { isNull } from 'lodash'
import { Heart } from 'lucide-react'
import React, { useEffect, useState } from 'react'


function FavouritesPage() {

    useEffect(() => {
        const fetchData = async () => {
            const session = await getServerAuthSession();
            const user = session?.user
            if(isNull(user?.walletAddress)) {
                return <Redirect 
                    link='/setup-wallet'
                />
            }
        }
        fetchData();
    }, []);
    
    
    const [favorites, setFavorites] = useState([]);

    //function to add/remove books from favorites
    const handleToggleFavorite = (bookId) => {
        if (favorites.includes(bookId)) {
            //remove from favorites
            setFavorites(favorites.filter((id) => id !==bookId));
        }else{
            //add to favorites
            setFavorites([...favorites, bookId]);
        }
    }

return (
    <div className="flex flex-col items-center justify-centet w-full space-y-10 px-2 pb-[100px]">

        {/* Favourites */}
        <div className="flex flex-col gap-y-4 w-full px-5 py-5">
        <div className="flex flex-row items-center gap-x-4">
            <Heart fill="red" stroke='red' />
            <h2 className="text-lg font-semibold">
                Your favourite reads.
            </h2>
        </div>
        <div className="flex flex-col w-full gap-y-5">
            <BookDetails onToggleFavorite={handleToggleFavorite} bookId=''/>
            <BookDetails onToggleFavorite={handleToggleFavorite} bookId=''/>
            <BookDetails onToggleFavorite={handleToggleFavorite} bookId=''/>
        </div>
        </div>
    </div>
)
}

export default FavouritesPage;
//books section