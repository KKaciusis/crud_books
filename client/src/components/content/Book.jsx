

function Book({ book, deleteBook, showModal }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card m-3">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <h6 className="card-title">{book.author}</h6>
                        <span className="badge badge-secondary m-1">Category:&nbsp; {book.category}</span>
                        <span className="badge badge-secondary m-1">Pages:&nbsp; {book.pages}</span>

                        <div className="form-group mt-2">
                        <button type="button" className="btn btn-warning m-2" onClick={()=>deleteBook(book.id)}>Delete</button>
                        <button type="button" className="btn btn-warning" onClick={()=>showModal(book.id)}>Edit</button>
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default Book;