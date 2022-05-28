import React from "react";
import { Button } from "@mui/material";
import "./Book.css";

const Book = (props) => {
  const { id, name, author, description, price, image } = props.book;
  return (
    <div className="bookCard">
      <img src={image} alt={name} />
      <section>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>${price}</h2>
      </section>
      <aside>
        <Button color="success">Update</Button>
        <Button color="error">Delete</Button>
      </aside>
    </div>
  );
};

export default Book;
