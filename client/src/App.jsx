import './Style/App.css';
import TopBar from './components/Inputs/TopBar';
import ContentOutput from './components/content/ContentOutput';
import BookInput from './components/Inputs/BookInput';
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from './components/Modal/Edit';


function App() {
    const [books, setBooks] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now())
    const [modalId, setModalId] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3005/api/books')
            .then((response) => {
                setBooks(response.data);
            })
    }, [lastUpdate])

    const addBook = (book) => {
        axios.post('http://localhost:3005/api/books', book).then(() => {
                console.log("nigeria")
                setLastUpdate(Date.now())
            })
    };

    const deleteBook = (id) => {
        axios.delete('http://localhost:3005/api/books'+ id).then(() => {
                console.log("nigeria")
                setLastUpdate(Date.now())
            })
    };

    const editBook = (id, book) => {
        axios.put('http://localhost:3005/api/books'+ id, book).then(() => {
                console.log("nigeria")
                setLastUpdate(Date.now())
            })
    };

    const getBook = id => {
        if (id === 0){
            return [];
        }

        for(let i = 0; i < books.length; i++){
            if (books[i].id === id){
                return {...books[i]};
            } 
        }
    };

    const showModal = id => {
        setModalId(id)
    }

    const hideModal = () => {
        setModalId(0)
    }

    return (
        <>
            <TopBar/>
            <BookInput addBook={addBook} deleteBook={deleteBook}/>
            <ContentOutput books={books} deleteBook={deleteBook} showModal={showModal}/>
            <Edit id={modalId} book={getBook(modalId)} editBook={editBook} hideModal={hideModal}/>
        </>
    );
}

export default App;
