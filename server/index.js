const express = require("express");
// const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const db = require("./config/connection");
const router = require("./routes/bookRoutes");

const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // will convert middleware and allow reading of json everywhere through server
app.use(cors()); // helps in overriding securities
app.use("/books", router); //localhost:5000/books

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("Conneezeed to the Deezy"))
//   .then(() => {
//     app.listen(PORT);
//   })
//   .catch((err) => err);
