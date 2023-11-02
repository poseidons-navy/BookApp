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
import { upload } from "../middleware/fileUpload.js";
import getPublisherIDFromAddress from '../model/Publishers/getIdFromAddress.js';
import { createBook } from '../model/Books/createBook.js';
import MyError from '../myError.js';
import { ErrorMessages, SucessMessages } from '../constants.js';
// Route for publishing a book
router.post('/', upload.fields([{ name: 'book_cover', maxCount: 1 }, { name: 'book', maxCount: 1 }]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extracting title, description and genre from request body
        let title = req.body.title;
        let description = req.body.description;
        let genre = Number.parseInt(req.body.genre);
        let publisher_address = req.body.publisher_address;
        let book_cover_location = req.files['book_cover'][0].location;
        let book_location = req.files['book'][0].location;
        console.log(book_cover_location, book_location);
        // Get ID of publisher from address
        let publisher_id = yield getPublisherIDFromAddress(publisher_address);
        // TODO: Create book in blockchain and get its address
        let blockchain_address = "TO DO";
        // Create book
        yield createBook(title, description, genre, book_cover_location, book_location, publisher_id, blockchain_address);
        res.status(201).json({ message: SucessMessages['CREATED_BOOK'] });
    }
    catch (err) {
        console.log(err);
        if (err instanceof MyError) {
            res.status(400).json({ err: err.message });
        }
        else {
            res.status(500).json({ err: ErrorMessages["INTERNAL_SERVER_ERROR"] });
        }
    }
}));
export default router;
//# sourceMappingURL=publish.js.map