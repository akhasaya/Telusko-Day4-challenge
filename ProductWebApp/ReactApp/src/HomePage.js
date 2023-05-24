import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        Welcome to Products app
                    </div>
                    <div className="card-body">
                        <div className="divbtn">
                            <Link to="products" className="btn btn-success"> Display products </Link>
                        </div>
                        <div className="divbtn">
                            <Link to="product" className="btn btn-success"> Add a product </Link>
                        </div>
                        <div className="divbtn">
                            <Link to="product/search" className="btn btn-success"> Search a product </Link>
                        </div>
                        <div className="divbtn">
                            <Link to="product/place" className="btn btn-success"> Search for products in a place </Link>
                        </div>
                        <div className="divbtn">
                            <Link to="product/warranty" className="btn btn-success"> Get products without warranty </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;
