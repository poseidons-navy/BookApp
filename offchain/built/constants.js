import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config();
export var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NOT_AUTHORIZED"] = "User is not authorized";
    ErrorMessages["NOT_LOGGED_IN"] = "Not Logged In";
    ErrorMessages["ROUTE_NOT_EXISTS"] = "The route does not exist";
    ErrorMessages["NOT_GET_GENRES"] = "Could Not Get Genres";
    ErrorMessages["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
    ErrorMessages["NOT_CREATE_GENRE"] = "Could Not Create Genre";
})(ErrorMessages || (ErrorMessages = {}));
export var SucessMessages;
(function (SucessMessages) {
    SucessMessages["CREATED_GENRE"] = "Successfuly Created Genre";
})(SucessMessages || (SucessMessages = {}));
export let supabaseClient = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
//# sourceMappingURL=constants.js.map