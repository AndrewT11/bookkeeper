// bookkeeping MongoDB admin password: FffvnsNC9mLN21Lj
const express = require("express");
const mongoose = require("mongoose")
const router = require("./routes/bookRoutes")

const app = express();

// Middlewares

app.use("/books", router) //localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin:FffvnsNC9mLN21Lj@cluster0.yntfo.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("Connected to Database"))
    .then(()=> { app.listen(5000)})
    .catch((err)=>(err))
