import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import About from "./components/About";

import Books from "./components/Book/Books";
import UpdateBook from "./components/Book/UpdateBook";
import DeleteBook from "./components/Book/DeleteBook";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<UpdateBook />} exact />
          <Route path="/delete/:id" element={<DeleteBook />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
