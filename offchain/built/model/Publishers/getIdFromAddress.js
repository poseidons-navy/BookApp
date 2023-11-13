var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import necessary Prisma types
import { PrismaClient } from '@prisma/client';
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
// create an instance of PrismaClient
const prisma = new PrismaClient();
// Function to get Publisher ID from address
export default function getPublisherIDFromAddress(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use Prisma to find Publisher by address
            const publisher = yield prisma.publisher.findUnique({
                where: { address },
                select: { id: true },
            });
            // Throw an error if the publisher is not found
            if (!publisher) {
                throw new MyError(ErrorMessages['USER_NOT_EXIST']);
            }
            let publisher_id = Number.parseInt(address);
            return publisher.id;
        }
        catch (err) {
            console.log(err);
            if (err instanceof MyError) {
                throw err;
            }
            else {
                throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
            }
        }
    });
}
//# sourceMappingURL=getIdFromAddress.js.map