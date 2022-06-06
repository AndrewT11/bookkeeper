import React, { useState } from "react";
import axios from "axios";

import { Box, Button, FormLabel, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import spike from "../images/spikethumbsup.png";

const AddBook = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    // available: false,
    image: "",
  });

  // useState for availability checkbox
  const [checked, setChecked] = useState(false);

  // handler for onChange in form input fields
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  // send data to server. posting to the url with the object information.
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  // handle for submit button.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };

  return (
    <div className="addBookPage">
      <img className="addBookImg" src={spike} alt="Spike Spiegel" />
      <form className="addBookForm" onSubmit={handleSubmit}>
        <Box
          // applies to formcontrollabel only.
          // sx={{
          //   color: "#e3f2fd",
          // }}
          // display={"flex"}
          // flexDirection={"column"}
          justifyContent={"center"}
          width={"auto"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>Author</FormLabel>
          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />
          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />
          <FormLabel>Price</FormLabel>
          <TextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <FormLabel>Image</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          {/* onChange to function that makes useState setChecked to the opposite of its current state. So if it is checked true, it will be checked false and vice versa */}
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;
