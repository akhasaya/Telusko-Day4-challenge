import { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {

    const [id] = useState("");
    const [name, updateName] = useState("");
    const [type, updateType] = useState("");
    const [place, updatePlace] = useState("");
    const [warranty, updateWarranty] = useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        const productdata={name,type,place,warranty};

        //console.log({id,name,type,place,warranty});
        fetch("http://localhost:8080/product", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(productdata),
        }).then((res)=>{
            alert("Saved successfully");
        }).catch((err)=>{
            console.log(err.message);
        })
    }


    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2> Add a product</h2>

                            </div>
                            <div className="card-body">
                                <div className="row">
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name </label>
                                            <input required value={name} onChange={e=> updateName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Type</label>
                                            <input value={type} onChange={e=> updateType(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Place</label>
                                            <input value={place} onChange={e=> updatePlace(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Warranty</label>
                                            <input value={warranty} onChange={e=> updateWarranty(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger"> Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default AddProduct;
