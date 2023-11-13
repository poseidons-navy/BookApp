import express from "express";
import { ErrorMessages } from "./constants.js";
//import cors from 'cors';
let app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
/*app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );*/
// Importing routes
import genres from "./routes/genres.js";
import publish from './routes/publish.js';

// Setting where routes will be handled
app.use('api/v2/publish', publish)
app.use('api/v2/genres', genres)

app.get("*", (req, res) => {
    res.status(400).json({msg: ErrorMessages['ROUTE_NOT_EXISTS']})
})

const port = 3500;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`);
})