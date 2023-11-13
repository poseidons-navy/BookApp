var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
let router = express.Router();
import { ErrorMessages } from "../constants.js";
import { SuccessMessages } from "../constants.js";
import { getGenres } from "../model/Genres/getGenres.js";
import MyError from "../myError.js";
import { createGenre } from "../model/Genres/createGenre.js";
// Route for getting all categories in system
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let genres = yield getGenres();
        return res.json(genres);
    }
    catch (err) {
        if (err instanceof MyError) {
            return res.status(400).json({ msg: err.message });
        }
        else {
            return res.status(500).json({ msg: ErrorMessages['INTERNAL_SERVER_ERROR'] });
        }
    }
}));
// Route for creating genres
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name } = req.body;
        console.log(name);
        yield createGenre(name);
        return res.status(201).json({ msg: SuccessMessages["CREATED_GENRE"] });
    }
    catch (err) {
        console.log(err);
        if (err instanceof MyError) {
            return res.status(400).json({ msg: err.message });
        }
        else {
            return res
                .status(500)
                .json({ msg: ErrorMessages["INTERNAL_SERVER_ERROR"] });
        }
    }
}));
router.get('/test', (req, res) => {
    res.send("Can Reach Genres Route!");
});
router.get("*", (req, res) => {
    res.status(404).json({ msg: ErrorMessages['ROUTE_NOT_EXISTS'] });
});
export default router;
//# sourceMappingURL=genres.js.map