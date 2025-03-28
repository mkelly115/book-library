import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

export default function Books() {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get('search') || ''
  const books = useContext(BooksContext);

  const filteredBooks = books;

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
