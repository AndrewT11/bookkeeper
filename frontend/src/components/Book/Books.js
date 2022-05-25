//This file will render all books from Book.js here.
import React, { useEffect, useState } from 'react'
import axios from "axios"

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=> res.data);
}

const Books = () => {
  const [books, setBooks] =useState();
  useEffect(()=> {
    fetchHandler().then(data=>setBooks(data))
  }, [])
  return (
    <div>All your Books right hurr</div>
  )
}

export default Books