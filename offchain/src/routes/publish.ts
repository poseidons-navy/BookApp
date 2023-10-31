import express from 'express';
let router = express.Router();
import multer from 'multer';
let upload = multer({dest: 'uploads/'});
import { readFile } from 'fs';

// Route for publishing a book
router.post('/' ,upload.fields([{name: 'book_cover', maxCount: 1}, {name: 'book', maxCount: 1}]), async (req, res) => {
    // Extracting title, description and genre from request body
    let title: string = req.body.title;
    let description: string = req.body.description;
    let genre = Number.parseInt(req.body.genre);

    // Read book cover and book
    let book_cover_file_location: string = req.files["book_cover"][0].path;
    let book_file_location: string = req.files["book"][0].path;
    try {
        readFile(book_cover_file_location, (err, data) => {
            if (err) throw err
            console.log("Book Cover Data is: ")
            let book_cover_data: Buffer = data
            console.log(book_cover_data)

            readFile(book_file_location, (err, data) => {
                if (err) throw err
                console.log("Book Data is: ")
                let book_data: Buffer = data
                console.log(book_data)

                res.send("Done")
            })
        })
    } catch(err) {
        console.log(`Error is ${err}`)
    }
})

export default router;