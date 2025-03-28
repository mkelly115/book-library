import react, { useState, useEffect, createContext} from "react";

export const BooksContext = createContext();

export const BooksProvider = ({children}) => {

    const [books, setBooks] = useState([])

    useEffect(()=> {
        //set books
    }, []);

    return(
        <BooksContext.Provider value={books}>
            {children}
        </BooksContext.Provider>
    )

}