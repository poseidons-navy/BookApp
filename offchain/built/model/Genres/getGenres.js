var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { supabaseClient } from "../../constants.js";
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
// A function to get genres from the database
export function getGenres() {
    return __awaiter(this, void 0, void 0, function* () {
        let { data, error } = yield supabaseClient.from('Genres').select('id, genre');
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
    });
}
export function getGenreIDFromName(genre) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { data, error } = yield supabaseClient
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
//# sourceMappingURL=getGenres.js.map