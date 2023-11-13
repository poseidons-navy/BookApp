// Import PrismaClient
import { PrismaClient } from '@prisma/client';
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";

const prisma = new PrismaClient();

// A function to get genres from the database
export async function getGenres(): Promise<"Genre"[]> {
    try {
        // Use Prisma to get all genres
        const genres = await prisma.genre.findMany({
            select: {
                id: true,
                genre: true,
            },
        });

        return genres;
    } catch (error) {
        console.error(error);
        throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
    }
}

export async function getGenreIDFromName(genre: string): Promise<number> {
    try {
        // Use Prisma to find the genre by name and select its id
        const genreRecord = await prisma.genre.findUnique({
            where: {
                genre,
            },
            select: {
                id: true,
            },
        });

        // Throw an error if genreRecord is null
        if (!genreRecord) {
            throw new MyError(ErrorMessages['NOT_GET_GENRE']);
        }

        return genreRecord.id;
    } catch (error) {
        console.error(error);
        throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
    }
}
