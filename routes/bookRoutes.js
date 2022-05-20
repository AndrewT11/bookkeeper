const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book")
const bookController = require("../controllers/bookController")

router.get("/", bookController.getAllBooks)
router.post("/", bookController.addBook)
router.get("/:id", bookController.getById)

module.exports = router;