const Book = require("../model/Book")

const getAllBooks = async (req,res,next) => {
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
}

const addBook = async (req, res, next) => {
    const { name, author, description, price, available} = req.body;
    let book;
    try {
        book = new Book({
            name, // if we did not destructure above, req.body.name, req.body.author, req.body.description
            author,
            description,
            price,
            available
        })
        await book.save()
    } catch (err) {
        console.log(err)
    }

    //if no book, 500 error message
    if (!book) {
        return res.status(500).json({message: "Unable to Add"})
    }
    return res.status(201).json({book})
}

// because we are grabbing a book by its id, we use req.params.id to use the :id param in the url (:id) to be used to grab the book with the matching id. You can change the name of the param by changing the url in routes. (router.get("/:bookId") would need req.params.bookId)
const getById = async (req, res, next) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findById(id)
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(500).json({message: "No matching book with that ID"})
    }
    return res.status(201).json({book})
}

const updateBook = async (req, res, next) => {
    const id = req.params.id
    const { name, author, description, price, available} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,  
            available
        });
        book = await book.save()
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(500).json({message: "Unable to update book with this ID"})
    }
    return res.status(201).json({book})
}

exports.getById = getById;
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.updateBook = updateBook;