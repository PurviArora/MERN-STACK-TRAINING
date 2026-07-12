import React from 'react'

const Product = (props) => {
    console.log(props)
    // Object Destructuring 
    const {pname, price, qty, pimage } = props.data;

  return (
    <>
      <div className="container w-25">
        <div className="card">
            <div className="card-header ">
                <img src={pimage} alt="" className='img-fluid' />
            </div>
            <div className="card-body text-center fw-bold fs-3 fst-italic">
                {pname}
            </div>
            <div className="card-footer d-flex justify-content-around">
                <span> Price : {price} </span>
                <span> Qty : {qty} </span>
                <span> Total : {price*qty} </span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Product;