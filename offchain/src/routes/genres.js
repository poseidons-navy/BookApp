import express from "express";
let router = express.Router();
import { ErrorMessages } from "../constants.js";
import { SuccessMessages } from "../constants.js";
import { getGenres } from "../model/Genres/getGenres.js";
import MyError from "../myError.js";
import { createGenre } from "../model/Genres/createGenre.js";

// Route for getting all categories in system
router.get("/", async (req, res) => {
    try {
        let genres = await getGenres();
        return res.json(genres);
    } catch(err) {
        if (err instanceof MyError) {
            return res.status(400).json({msg: err.message})
        } else {
            return res.status(500).json({msg: ErrorMessages['INTERNAL_SERVER_ERROR']})
        }
    }
});

// Route for creating genres
router.post("/",async (req, res) => {
    try {
        let { name } = req.body;
        console.log(name);
        await createGenre(name);
        return res.status(201).json({ msg: SuccessMessages["CREATED_GENRE"] });
    } catch (err) {
        console.log(err);
        if (err instanceof MyError) {
            return res.status(400).json({ msg: err.message });
        } else {
            return res
                .status(500)
                .json({ msg: ErrorMessages["INTERNAL_SERVER_ERROR"] });
        }
    }
})

router.get('/test', (req, res) => {
    res.send("Can Reach Genres Route!");
})

router.get("*", (req, res) => {
    res.status(404).json({msg: ErrorMessages['ROUTE_NOT_EXISTS']});
})

export default router;