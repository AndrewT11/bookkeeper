import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Book.css";

const DeleteBook = () => {
  // this will set the current state of books to the one you chose to delete.
  // this is needed for useEffect to change  which book needs to be updated.
  const [inputs, setInputs] = useState({});

  // used to navigate to a url of choice once activated
  const history = useNavigate();

  // grab the param used in id field for fetching.
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book))
        .then((data) => console.log(data.book));
    };
    fetchHandler();
  }, [id]);

  const deleteRequest = async () => {
    await axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => console.log(res.data));
  };

  const handleSubmit = (e) => {
    console.log("inside handle submit");
    e.preventDefault();
    deleteRequest().then(() => history("/books"));
  };

  return (
    <>
      {inputs && (
        <>
          <section className="deleteContainer">
            <div className="bookCardDelete">
              <img src={inputs.image} alt={inputs.name} />
              <section className="deleteSection">
                <article textAlign="center">By {inputs.author}</article>
                <h3 textAlign="center" className="title">
                  {inputs.name}
                </h3>
                <p>{inputs.description}</p>
                <h2>${inputs.price}</h2>
              </section>
            </div>
            <h2 className="deleteText">
              Are you sure you want to delete this book?
              <br />
              It will be gone{" "}
              <span className="forever">forever...unless...</span>
              <br />
              You...add it <span className="again">again</span>!
            </h2>
            {/* Added onSubmit here to hopefully have button handle deleteRequest() */}
            <form onSubmit={handleSubmit}>
              <Button
                // onSubmit={handleSubmit}
                color="error"
                variant="contained"
                type="submit"
              >
                Delete Book
              </Button>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default DeleteBook;
