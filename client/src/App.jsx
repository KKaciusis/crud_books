import './Style/App.css';
import TopBar from './components/Inputs/TopBar';
import ContentOutput from './components/content/ContentOutput';
import BookInput from './components/Inputs/BookInput';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now())

    useEffect(() => {
        axios.get('http://localhost:3005/api/books')
            .then((response) => {
                setBooks(response.data);
            })
    }, [lastUpdate]);

    const addBook = (book) => {
        axios.post('http://localhost:3005/api/books', book)
            .then(() => {
                setLastUpdate(Date.now())
                console.log(Date.now())
            })
            setLastUpdate(Date.now())
            console.log(Date.now())
    };

    return (
        <>
            <TopBar />
            <BookInput addBook={addBook}/>
            <ContentOutput books={books} />
        </>
    );
}

export default App;
