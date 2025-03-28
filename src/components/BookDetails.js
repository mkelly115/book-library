import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export default function BookDetails(){

    const { bookId } = useParams()
    const books = useContext(BooksContext)

    const book = books.find(b => b.id == parseInt(bookId))

    if(books.length === 0){
        return <div>Loading...</div>
    }

    if(book == null){
        return <div>Book not found :\</div>
    }

    return(
        <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>{book.description}</p>
        </div>
    )
}