import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient();
export const ErrorMessages = {
    NOT_AUTHORIZED: 'User is not authorized',
    NOT_LOGGED_IN: 'Not Logged In',
    ROUTE_NOT_EXISTS: 'The route does not exist',
    NOT_GET_GENRES: 'Could Not Get Genres',
    NOT_GET_GENRE: 'Could Not Get Genre',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    NOT_CREATE_GENRE: 'Could Not Create Genre',
    NOT_PUBLISH_BOOK: 'Could Not Publish Book',
    NOT_GET_USER_ID: 'Could Not Get ID of User From Address',
    USER_NOT_EXIST: 'User Does Not Exist',
};
export const SuccessMessages = {
    CREATED_GENRE: 'Successfully Created Genre',
    CREATED_BOOK: 'Successfully Published Book',
};
export { prisma };
//# sourceMappingURL=constants.js.map