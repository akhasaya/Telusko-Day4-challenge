import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [productdata, updateProductData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/products").then((res) => {
            return res.json();
        }).then((resp) => {
            updateProductData(resp);
        }).catch((error) => {
            console.log(error.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>List of Products</h2>

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
                                productdata.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.place}</td>
                                <td>{item.warranty}</td>
                            </tr>
                            ) )
                            }

                        </tbody>
                    </table>
                    <Link to="/" className="btn btn-danger"> Back</Link>
                </div>
            </div>
        </div>
    );
}
export default ProductList;