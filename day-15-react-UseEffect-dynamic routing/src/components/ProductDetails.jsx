import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const getProductByID = async () => {
        let resp = await axios.get("https://fakestoreapi.com/products/" + id);
        resp = await resp.data;
        setProduct(resp)
    }

    useEffect(() => {
        getProductByID();
    }, [])
    return (
        <>
            {/* <h1> Product Details of {id} </h1> */}

            <div className="container">
                <div className="card w-25">
                    <div className="card-header">
                        <img src={product.image} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">{product.title}</li>
                <li className="list-group-item">{product.category}</li>
                <li className="list-group-item"> {product.description} </li>
                <li className="list-group-item">{product.price}</li>
                <li className="list-group-item"> {product.rating?.rate} </li>
            </ul>
        </>
    )
}

export default ProductDetails;