var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
import { supabaseClient } from "../../constants.js";
export function createBook(title, description, genre_id, book_cover_url, book_url, publisher_id, blockchain_address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Insert the details to the server
            const { error } = yield supabaseClient.from('Books').insert({
                publisher_id: publisher_id,
                title: title,
                description: description,
                genre_id: genre_id,
                book_cover_url: book_cover_url,
                book_url: book_url,
                blockchain_address: blockchain_address
            });
            // Throw an error if error is not null
            if (error != null) {
                console.log(error);
                throw new MyError(ErrorMessages['NOT_PUBLISH_BOOK']);
            }
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
// Testing to see if the create book function works
// async function main() {
//     await createBook(
//         "Test Book",
//         "Test Description",
//         5,
//         "Test Book Cover URL",
//         "Test Book  URL",
//         1,
//         "Test Block chain address"
//     )
// }
// main()
//# sourceMappingURL=createBook.js.map