"use client"

import { buyProductAction, Book } from '@/algorand/books'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { getPublicationSaveEvent, removePublicationSaveEvent, savePublication } from '@/server/publication'
import { Publication, User, UserEvent } from '@prisma/client'
import clsx from 'clsx'
import { isNull } from 'lodash'
import { BookOpenText, HeartIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



function Interactions(props: { publication: Partial<Publication & { creator: User | null }> | null, className?: string, showRead: boolean, appId?: number, senderAddress?: string, ownerAddress?: string }) {
    const { publication, className, showRead, appId, senderAddress, ownerAddress } = props
    const [saveEvent, setSaveEvent] = useState<UserEvent | null>(null)
    const [loading, setLoading] = useState(false)
    const [eventLoading, setEventLoading] = useState(false)
    const { toast } = useToast()

    const handleLike = async () => {
        console.log("Publication::", publication)
        if (publication?.id) {
            setLoading(true)
            try {
                const save_event = await savePublication(publication?.id)
                setSaveEvent(save_event)
            }
            catch (e) {
                toast({
                    variant: "destructive",
                    title: "!Oops",
                    description: "Something went wrong"
                })
            }
            finally {
                setLoading(false)
            }
        }
    }

    const removeLike = async () => {
        console.log("like", publication)
        if (saveEvent?.id) {
            setLoading(true)
            try {
                await removePublicationSaveEvent(saveEvent?.id)

                setSaveEvent(null)
            }
            catch (e) {
                toast({
                    variant: "destructive",
                    title: "!Oops",
                    description: "Something went wrong"
                })
            }
            finally {
                setLoading(false)
            }
        }
    }

    const loadSaveEvent = async () => {
        if (publication?.id) {
            setEventLoading(true)
            try {
                const save = await getPublicationSaveEvent(publication?.id)
                console.log("Save::", save)
                setSaveEvent(save)
            }
            catch (e) {
                // ignore
            }
            finally {
                setEventLoading(false)
            }

        }
    }

    function buyBook() {
        if (appId == null || senderAddress == null || ownerAddress == null) {
            toast({
                variant: "destructive",
                title: "!Oops",
                description: "Could Not Buy Book"
            })
        } else {
            const book = new Book(
                publication?.name ?? "", 
                publication?.cover ?? "", 
                publication?.price ?? 10,
                false,
                appId,
                ownerAddress,
                publication?.id ?? ""
            )
           try {
            buyProductAction(senderAddress, book);
            toast({
                title: "🎉 Success",
                description: "Successfully bought book",
            })
           } catch(err) {
            console.log(err);
            toast({
                variant: "destructive",
                title: "!Oops",
                description: "Could Not Buy Book"
            })
           }
        }
    }

    useEffect(() => {
        (async () => {
            await loadSaveEvent()
        })()
    }, [])




    return (
        <div className={clsx("flex flex-row items-center gap-x-5", className)}>
            <Button onClick={() => {
                // saveEvent ? handleLike : removeLike
                if (isNull(saveEvent)) {
                    return handleLike()
                } else {
                    return removeLike()
                }
            }} isLoading={eventLoading || loading} className='gap-x-4' variant={'outline'} >
                <HeartIcon fill={!isNull(saveEvent) ? "red" : undefined} stroke={!isNull(saveEvent) ? "red" : undefined} />
                <span>Like</span>
            </Button>

            {showRead ? <Link legacyBehavior href={`/dashboard/publications/${publication?.id}/read`} >
                <Button className='gap-x-4' variant={'outline'} >
                    <BookOpenText />
                    <span>Read</span>
                </Button>
            </Link> : <Button className='gap-x-4' variant={'outline'} onClick={buyBook}>
                <BookOpenText />
                <span>Buy</span>
            </Button>}

        </div>
    )
}

export default Interactions