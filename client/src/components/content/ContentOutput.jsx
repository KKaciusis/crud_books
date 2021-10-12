import {useState, useEffect} from "react";
import axios from "axios";
import Book from "./Book"

function ContentOutput() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3005/books')
        .then((response) => {
            setBooks(response.data);
        },[])
    });

    return (
        <>
            <div class="container">
                <div class="row">
                    {books.map(book => <Book/>)}
                </div>
            </div>
        </>
    )
}

export default ContentOutput;