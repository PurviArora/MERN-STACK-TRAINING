import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(true)
    useEffect(()=>{
        document.title = "useEffect" 
        console.log("Effect Executes: ",count )
    },[flag])
  return (
    <>
      <h1> Welcome  </h1>
      <button className='btn btn-success w-25 mt-4 fw-bold d-flex justify-content-around'> 
            <span className='mx-3' onClick={()=>setCount(count-1)}>-</span>
            <span className='mx-3'> {count} </span>
            <span className='mx-3' onClick={()=>{setCount(count+1)}}> + </span>
      </button>
      
      {
        flag?
        <button className='btn btn-dark mt-4' onClick={()=>setFlag(false)}> Dark Mode </button>
        : 
        <button className='btn btn-primary mt-4' onClick={()=>setFlag(true)}> Light Mode </button>
      }
      <hr />
    </>
  )
}

export default Effect;