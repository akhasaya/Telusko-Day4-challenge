import { useState } from "react";
import { Link } from "react-router-dom";

const SearchProduct=()=>{
    const [productdata, updateProductData] = useState(null);
    const [text, updateText] = useState(null);

    const getProducts=(e) => {
        e.preventDefault();
        fetch("http://localhost:8080/product/search/" + text).then((res) => {
            return res.json();
        }).then((resp) => {
            updateProductData(resp);
        }).catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={getProducts}>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Enter text to search: </label>
                                <input value={text} onChange={e => updateText(e.target.value)} className="form-control"></input>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Save</button>
                                <Link to="/" className="btn btn-danger"> Back</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2>Search for a product</h2>

                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thread className="bg-dark text-white">
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Place</td>
                                    <td>Warranty</td>
                                </tr>
                            </thread>
                            <tbody>
                                {
                                    productdata &&
                                    productdata.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.type}</td>
                                            <td>{item.place}</td>
                                            <td>{item.warranty}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchProduct;

