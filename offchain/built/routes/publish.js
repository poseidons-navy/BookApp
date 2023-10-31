var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
let router = express.Router();
import multer from 'multer';
let upload = multer({ dest: 'uploads/' });
import { readFile } from 'fs';
// Route for publishing a book
router.post('/', upload.fields([{ name: 'book_cover', maxCount: 1 }, { name: 'book', maxCount: 1 }]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extracting title, description and genre from request body
    let title = req.body.title;
    let description = req.body.description;
    let genre = Number.parseInt(req.body.genre);
    // Read book cover and book
    let book_cover_file_location = req.files["book_cover"][0].path;
    let book_file_location = req.files["book"][0].path;
    try {
        readFile(book_cover_file_location, (err, data) => {
            if (err)
                throw err;
            console.log("Book Cover Data is: ");
            let book_cover_data = data;
            console.log(book_cover_data);
            readFile(book_file_location, (err, data) => {
                if (err)
                    throw err;
                console.log("Book Data is: ");
                let book_data = data;
                console.log(book_data);
                res.send("Done");
            });
        });
    }
    catch (err) {
        console.log(`Error is ${err}`);
    }
}));
export default router;
//# sourceMappingURL=publish.js.map