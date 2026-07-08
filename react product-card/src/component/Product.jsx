import React from 'react'
import Counter from './Counter';

const Product = ({data}) => {
    console.log()
    // Object Destructuring 
    const {pname, price, qty, pimage } = data;

  return (
    <>
        <h1 className='heading mt-5 mb-4 text-center fw-bold'>Product Card</h1>
      <div className="container w-25">
        <div className="card">
            <div className="card-header">
                <img src={pimage} alt="" className='img-fluid' />
            </div>
            <div className="card-body text-center fw-bold fs-3 fst-italic">
                {pname}
            </div>
            <div className="card-footer d-flex justify-content-around">
                <span> Price : {price} </span>
            </div>
            <div className='card-footer text-center d-flex justify-content-center align-items-center gap-2'>
                <span> Qty : </span>
                 <Counter />
            </div>
        </div>
      </div>
     
    </>
  )
}

export default Product;