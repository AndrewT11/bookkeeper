//This file will render all books from Book.js here.
import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../components/Book/Book";
import "../components/Book/Book.css";
import openbook from "../images/openbook-fococlipping-standard.png";

// removed books after 5000/ test
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  return (
    <div className="booksContainer">
      <img className="booksImg" src={openbook} alt="book" />
      <ul>
        {/* if you don't include books && books.map, books will not render */}
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
