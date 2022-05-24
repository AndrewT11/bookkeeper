const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book")
const bookController = require("../controllers/bookController")

// localhost:5000/books/
router.get("/", bookController.getAllBooks)
router.post("/", bookController.addBook)
router.get("/:id", bookController.getById)
router.put("/:id", bookController.updateBook)

module.exports = router;