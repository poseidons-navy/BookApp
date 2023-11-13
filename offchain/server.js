/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDatabase = require("./database.js");
const app = express();
//const PORT = process.env.PORT || 3001;


// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
//if (process.env.NODE_ENV !== "PRODUCTION") {
  //require("dotenv").config({
    //path: "config/.env",
  //});
//}

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
//const bookRoutes = require('./routes/bookRoutes'); // Adjust the path based on your project structure
//app.use('/api', bookRoutes);

//connect database
// index.js or server.js
connectDatabase();

// Rest of your server setup...



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// create server
//const server = app.listen(process.env.PORT, () => {
  //console.log(
    //`Server is running on http://localhost:${process.env.PORT}`
  //);
//});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});*/