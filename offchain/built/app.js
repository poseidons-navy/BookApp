import express from "express";
import { ErrorMessages } from "./constants.js";
let app = express();
// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Importing routes
import genres from "./routes/genres.js";
import publish from './routes/publish.js';
// Setting where routes will be handled
app.use('/publish', publish);
app.use('/genres', genres);
app.get("*", (req, res) => {
    res.status(400).json({ msg: ErrorMessages['ROUTE_NOT_EXISTS'] });
});
const port = 4500;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
//# sourceMappingURL=app.js.map