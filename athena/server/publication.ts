"use server"
import { Publication } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "./auth";


export async function createPublication(props: Omit<Publication, "id"| "created_at" | "status" | "creator_id" | "tags" >) {
    const session = await getServerAuthSession()
    const user = session?.user

    const new_publication = await prisma.publication.create({
        data: {
            ...props,
            creator_id: user?.id,
            tags: ''
        }
    })

    return new_publication
}

export async function getPublication(id: string) {

    const publication = await prisma.publication.findFirst({
        where: {
            id
        }
    })

    return publication
}

export async function savePublication(id: string) {
    const session = await getServerAuthSession()
    const user = session?.user
    const event = await prisma.userEvent.create({
        data: {
            publication_id: id,
            user_id: user?.id,
            type: "save"
        }
    })
    
    return event
}

export async function removePublicationSaveEvent(id: string){
    const session = await getServerAuthSession()

    const event = await prisma.userEvent.delete({
        where: {
            id
        }
    })
    
    return event

}

export async function getPublicationSaveEvent(id: string){
    const session = await getServerAuthSession()
    const user = session?.user

    const publication = await prisma.userEvent.findFirst({
        where: {
            publication_id: id,
            type: "save", 
            user_id: user?.id
        }
    })

    return publication

}

export async function getComments(publication_id: string){
    const comments = await prisma.comment.findMany({
        where: {
            publication_id
        },
        include: {
            user: true
        }
    })

    return comments
}

export async function postComment(publication_id: string, content: string){
    const session = await getServerAuthSession()
    const user = session?.user
    const comment = await prisma.comment.create({
        data: {
            content,
            user_id: user?.id,
            publication_id: publication_id
        },
        include: {
            user: true
        }
    })

    return comment
}

export async function getFavouritePublications(){
    const session = await getServerAuthSession()
    const user = session?.user

    const data = await prisma.userEvent.findMany({
        where: {
            user_id: user?.id
        },
        include: {
            publication: {
                include: {
                    creator: true
                }
            }
        }
    })

    const publications = data?.map((event)=> event.publication)

    return publications
}

export async function getCurrentUserPublications(search?: string){

    const session = await getServerAuthSession()
    const user = session?.user

    const publications = await prisma.publication.findMany({
        where: {
            creator_id: user?.id,
            name: (search && search?.length > 0) ? {
                contains: search,
                mode: 'insensitive'
            } : undefined
        },
        include: {
            creator: true
        }
    })

    return publications
}