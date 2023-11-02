import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
import { supabaseClient } from "../../constants.js";

export async function createBook(title: string, description: string, genre_id: number, book_cover_url: string, book_url: string, publisher_id: number, blockchain_address: string): Promise<void> {
    try {
        // Insert the details to the server
        const {error} = await supabaseClient.from('Books').insert({
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
    } catch(err) {
        console.log(err);
        if (err instanceof MyError) {
            throw err;
        } else {
            throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
        }
    }
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