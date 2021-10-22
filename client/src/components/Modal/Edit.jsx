import { useState, useEffect } from "react";

function Edit({ id, book, editBook, hideModal }) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [pages, setPages] = useState('');

    useEffect(() => {
        setTitle(book.title);
        setAuthor(book.author);
        setCategory(book.category);
        setPages(book.pages);
    }, [id]);

    const control = (e, what) => {
        switch (what) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'author':
                setAuthor(e.target.value);
                break;
            case 'category':
                setCategory(e.target.value);
                break;
            case 'pages':
                setPages(e.target.value);
                break;
        }
    };

    const edit = () => {
        editBook(id, {
            title: title,
            author: author,
            category: category,
            pages: pages,
        })
        hideModal()
        setTitle('')
        setAuthor('')
        setCategory('')
        setPages('')
    };

    if (id === 0){
        return null;
    }

    return (
        <div className="modalas">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Book</h5>
                                <div className="form-group">
                                    <label >Title</label>
                                    <input type="text" className="form-control" placeholder="Enter New Title" onChange={(e) => control(e, 'title')} value={title} />
                                </div>
                                <div className="form-group">
                                    <label >Author</label>
                                    <input type="text" className="form-control" placeholder="Enter New Author Name" onChange={e => control(e, 'author')} value={author} />
                                </div>
                                <div className="form-group">
                                    <label >Category</label>
                                    <input type="text" className="form-control" placeholder="Enter New Category" onChange={(e) => control(e, 'category')} value={category} />
                                </div>
                                <div className="form-group">
                                    <label >Pages</label>
                                    <input type="text" className="form-control" placeholder="Enter New Page Count" onChange={(e) => control(e, 'pages')} value={pages} />
                                </div>
                                <button type="button" className="btn btn-warning" onClick={edit}>EDIT BOOK</button>
                                <button type="button" className="btn btn-info cancelBtn" onClick={hideModal}>CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;