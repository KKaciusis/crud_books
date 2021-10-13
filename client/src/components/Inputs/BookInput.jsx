import { useState } from "react";

function BookInput({ addBook }) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [pages, setPages] = useState('');

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

    const insertBook = () => {
        addBook({
            title: title,
            author: author,
            category: category,
            pages: pages,
        })
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">New Book</h5>
                                <div className="form-group">
                                    <label >Title</label>
                                    <input type="text" className="form-control" placeholder="Enter Title" onChange={(e) => control(e, 'title')} value={title} />
                                </div>
                                <div className="form-group">
                                    <label >Author</label>
                                    <input type="text" className="form-control" placeholder="Enter Author Name" onChange={e => control(e, 'author')} value={author} />
                                </div>
                                <div className="form-group">
                                    <label >Category</label>
                                    <input type="text" className="form-control" placeholder="Enter Category" onChange={(e) => control(e, 'category')} value={category} />
                                </div>
                                <div className="form-group">
                                    <label >Pages</label>
                                    <input type="text" className="form-control" placeholder="Enter Page Count" onChange={(e) => control(e, 'pages')} value={pages} />
                                </div>
                                <button type="button" className="btn btn-light" onClick={insertBook}>SUBMIT BOOK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookInput;