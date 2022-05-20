const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book")

router.get("/", async (req, res, next) => {
// This route will get all books.
    let books;
    try {
        books = await Book.find()
    } catch (err) {
        console.log(err);
    }

    if(!books) {
        return res.status(404).json({message: "No products found"})
    }
    return res.status(200).json({books})
})

module.exports = router;