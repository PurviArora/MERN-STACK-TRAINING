import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const APICalling = () => {

    const [product, setProduct] = useState([])

    const getAllProducts = async () => {
        let resp = await fetch("https://fakestoreapi.com/products");
        resp = await resp.json();
        setProduct(await resp)
    }

    useEffect(() => {
        document.title = "Fake User API "
        getAllProducts();
    }, [])
    return (
        <>
            <div className="container">
                <div className="row g-5">
                    {
                        product.map((val, index) => {
                            return <div className="col-md-4" key={index}>
                                <Link to={`/api/${val.id}`}>

                                    <div className="card">
                                        <div className="card-header">
                                            <img src={val.image} alt="" className='img-fluid' style={{ height: "200px" }} />
                                        </div>
                                        <div className="card-body">
                                            {val.title.slice(0, 30)}....
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <span className='fs-6 fw-bold fst-italic'>{val.category.toUpperCase()} </span>
                                            <span> {val.rating.rate}  </span>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default APICalling;