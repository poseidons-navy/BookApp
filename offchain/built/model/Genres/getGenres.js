var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import PrismaClient
import { PrismaClient } from '@prisma/client';
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
const prisma = new PrismaClient();
// A function to get genres from the database
export function getGenres() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use Prisma to get all genres
            const genres = yield prisma.genre.findMany({
                select: {
                    id: true,
                    genre: true,
                },
            });
            return genres;
        }
        catch (error) {
            console.error(error);
            throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
        }
    });
}
export function getGenreIDFromName(genre) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use Prisma to find the genre by name and select its id
            const genreRecord = yield prisma.genre.findUnique({
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
        }
        catch (error) {
            console.error(error);
            throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
        }
    });
}
//# sourceMappingURL=getGenres.js.map