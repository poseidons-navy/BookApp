import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
import { supabaseClient } from "../../constants.js";

export async function createGenre(name: string): Promise<void> {
    try {
        const {error} = await supabaseClient.from('Genres').insert({genre: name});

        // Throw an error if error is not null
        if (error != null) {
            console.log(error);
            throw new MyError(ErrorMessages['NOT_CREATE_GENRE']);
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