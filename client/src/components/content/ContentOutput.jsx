import Book from "./Book"

function ContentOutput({books, deleteBook, showModal}) {

    return (
        <>
            <div className="container">
                <div className="row m-3">
                    {books.map(book => <Book key={book.id} book={book} deleteBook={deleteBook} showModal={showModal}/>)}
                </div>
            </div>
        </>
    )
};

export default ContentOutput;