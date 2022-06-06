const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// localhost:3000/books/
router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);
router.get("/:id", bookController.getById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
