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
//import { upload } from "../middleware/fileUpload.js";
import getPublisherIDFromAddress from '../model/Publishers/getIdFromAddress.js';
import { createBook } from '../model/Books/createBook.js';
import MyError from '../myError.js';
import { ErrorMessages, SuccessMessages } from '../constants.js';
// Route for publishing a book
router.post('/publish'/*, upload.fields([{ name: 'book_cover', maxCount: 1 }, { name: 'book', maxCount: 1 }])*/, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract data from the request
        const { title, description, genre, coverURL, bookURL } = req.body;
        // Call the model function to create a book
        yield createBook({
            title,
            description,
            genre,
            coverURL,
            bookURL
        });
        res.status(201).json({ message: SuccessMessages['CREATED_BOOK'] });
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
//TO BE EDITED TO USE CREATEBOOK MODEL
//# sourceMappingURL=publish.js.map