const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");

// Step specifically added for Heroku
const path = require("path");

const router = require("./routes/bookRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json()); // will convert middleware and allow reading of json everywhere through server
app.use(cors()); // helps in overriding securities
app.use("/books", router); //localhost:5000/books

// also in Heroku deploy docs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//added in Heroku deployment docs
// Step 1. Will import the client build folder to the server
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2. ensure that the routes defined with React Router are working once the application has been deployed. Handles any request by redirecting them to index.html.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlPraser: true,
    useUnifiedToplogy: true,
  })
  .then(() => console.log("Conneezeed to the Deezy"))
  .catch((err) => err);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
