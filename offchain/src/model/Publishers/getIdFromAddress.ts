import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
import { supabaseClient } from "../../constants.js";

export default async function getPublisherIDFromAddress(address: string): Promise<number> {
    try {
        // Get Publisher ID
        const {data, error} = await supabaseClient
            .rpc('get_publisher_id', {address: address});

        // Throw an error if error is not null
        if (error != null) {
            console.log(error);
            throw new MyError(ErrorMessages['NOT_GET_USER_ID']);
        }

        if (data == null) {
            throw new MyError(ErrorMessages['USER_NOT_EXIST'])
        }

        let publisher_id = Number.parseInt(data)
        return publisher_id;
        
    } catch(err) {
        console.log(err);
        if (err instanceof MyError) {
            throw err;
        } else {
            throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
        }
    }
}
// Testing if function works
// async function main() {
//     let id = await getPublisherIDFromAddress("1")
//     console.log(`Publisher is: ${id}`);
// }

// main();