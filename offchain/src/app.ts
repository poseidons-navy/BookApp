import express from 'express';

let app = express();


const port = 4500;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`);
})