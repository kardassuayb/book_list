import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

const BookList = ({ books, onDelete, onEdit }) => {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>
      {renderedBooks}
    </div>
  );
};

export default BookList;
