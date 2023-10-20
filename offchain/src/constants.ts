import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config();

export enum ErrorMessages {
    "NOT_AUTHORIZED" = "User is not authorized",
    "NOT_LOGGED_IN" = "Not Logged In",
    "ROUTE_NOT_EXISTS" = "The route does not exist",
    "NOT_GET_GENRES" = "Could Not Get Genres",
    "INTERNAL_SERVER_ERROR" = "Internal Server Error",
    "NOT_CREATE_GENRE" = "Could Not Create Genre"
}

export enum SucessMessages {
    "CREATED_GENRE" = "Successfuly Created Genre"
}

export let supabaseClient = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);