import React from "react";
import { Button } from "@mui/material";
import "./Book.css";

const Book = (props) => {
  const { id, name, author, description, price, image } = props.book;
  return (
    <div className="bookCard">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>${price}</h2>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  );
};

export default Book;
