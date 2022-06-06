import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import AddBook from "./pages/AddBook";
import About from "./pages/About";

import Books from "./pages/Books";
import UpdateBook from "./pages/UpdateBook";
import DeleteBook from "./pages/DeleteBook";

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
