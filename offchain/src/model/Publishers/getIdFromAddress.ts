// import necessary Prisma types
import { PrismaClient } from '@prisma/client';
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
// create an instance of PrismaClient
const prisma = new PrismaClient();

// Function to get Publisher ID from address
export default async function getPublisherIDFromAddress(address: string): Promise<number> {
    try {
        // Use Prisma to find Publisher by address
        const publisher = await prisma.publisher.findUnique({
            where: { address },
            select: { id: true },
        });

        // Throw an error if the publisher is not found
        if (!publisher) {
            throw new MyError(ErrorMessages['USER_NOT_EXIST']);
        }

        let publisher_id = Number.parseInt(address);

        return publisher.id;
    } catch (err) {
        console.log(err);
        if (err instanceof MyError) {
            throw err;
        } else {
            throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
        }
    }
}
