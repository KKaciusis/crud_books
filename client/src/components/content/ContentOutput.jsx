
import Book from "./Book"

function ContentOutput({books}) {

    return (
        <>
            <div className="container">
                <div className="row">
                    {books.map(book => <Book key={book.id} book={book}/>)}
                </div>
            </div>
        </>
    )
};

export default ContentOutput;