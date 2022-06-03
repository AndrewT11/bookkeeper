import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import axios from "axios";

const Book = (props) => {
  const history = useNavigate();
  // id marked as _id for MongoDB. MongoDB will auto assign ID
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="bookCard">
      <img src={image} alt={name} />
      <section>
        <article>By {author}</article>
        <h3 className="title">{name}</h3>
        <p>{description}</p>
        <h2>${price}</h2>
      </section>
      <aside>
        <Button
          LinkComponent={Link}
          to={`/books/${_id}`}
          sx={{ mt: "auto", margin: "5px" }}
          variant="contained"
          color="success"
        >
          Update
        </Button>
        <Button
          variant="contained"
          onClick={deleteHandler}
          sx={{ mt: "auto" }}
          color="error"
        >
          Delete
        </Button>
      </aside>
    </div>
  );
};

export default Book;
