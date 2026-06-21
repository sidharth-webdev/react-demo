import "./home.css";

export function Home()
{
    return(
        <div className="container-fluid">
            <h2 className="box bg-warning m-3"> <span className="bi bi-house-fill"></span>React Home</h2>
            <div className="alert alert-dissmissible alert-success w-25 m-3">
                <h4>Welcome to React 18</h4>
                <p>javascript library for building Native and Web ui.</p>
                <button className="btn btn-success" data-bs-dismiss="alert">OK</button>
            </div>
        </div>
    )
}     