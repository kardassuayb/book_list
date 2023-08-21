import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookbyId = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const randomNumber = Math.round(Math.random() * 9999);
    const updatedBooks = [...books, { id: randomNumber, title }];
    setBooks(updatedBooks);
  };

  const editBookbyId = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookbyId} onEdit={editBookbyId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
