import { supabaseClient } from "../../constants.js";
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";

export interface Genre {
    id: number,
    genre: string
}
// A function to get genres from the database
export async function getGenres(): Promise<Genre[]> {
    let {data, error} = await supabaseClient.from('Genres').select('id, genre');
    
    // Throw an error if there was an issue getting data from supabase
    if (error != null) {
        throw new MyError(ErrorMessages['NOT_GET_GENRES']);
    }

    // Throw an error if data is null
    if (data == null) {
        throw new MyError(ErrorMessages['NOT_GET_GENRES']);
    }

    // Return the genres
    return data;
}

export async function getGenreIDFromName(genre:string): Promise<number> {
    try {
        let {data, error} = await supabaseClient
            .from('Genres')
            .select('id')
            .eq('genre', genre);
    
        // Throw an error if there was an issue getting data from supabase
        if (error != null) {
            console.log(error);
            throw new MyError(ErrorMessages['NOT_GET_GENRE']);
        }

        // Throw an error if data is null
        if (data == null) {
            throw new MyError(ErrorMessages['NOT_GET_GENRE']);
        }

        // Return the genres
        return data[0].id;
    } catch(err) {
        console.log(err);
        if (err instanceof MyError) {
            throw err;
        } else {
            throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
        }
    }
}