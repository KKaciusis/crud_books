

function TopBar({sort, allBooks}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card m-2">
                        <div className="card-body">
                            <h5 className="card-title">Sort Options</h5>
                            <button type="button" className="btn btn-info cancelBtn" onClick={()=>sort('title')}>Title</button>
                            <button type="button" className="btn btn-info cancelBtn" onClick={()=> sort('pages')}>Pages</button>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card m-2">
                        <div className="card-body">
                            <h5 className="card-title">Statistics</h5>
                            <h6>Books count: {allBooks}</h6>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col">
                        2 of 3
                    </div>
                    <div className="col">
                        3 of 3
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar;