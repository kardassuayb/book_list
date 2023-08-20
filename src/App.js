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

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookbyId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
