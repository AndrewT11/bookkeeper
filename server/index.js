// bookkeeping MongoDB admin password: FffvnsNC9mLN21Lj
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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
  res.sendFile(path.join(__dirname, "../client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

mongoose
  .connect(
    "mongodb+srv://admin:FffvnsNC9mLN21Lj@cluster0.yntfo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conneezeed to the Deezy"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => err);
