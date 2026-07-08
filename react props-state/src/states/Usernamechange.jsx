import React, { useState } from 'react'


const User = () => {
    let [userName, setUserName] = useState("Purvi");
    const changeName = ()=>{
        console.log(userName)
        setUserName("Purvi Arora !!!!!!")
    }
    
  return (
    <>
        <hr />
        <h1>Name Change on click</h1>
        <h1 className='text-center mt-3' > Hello {userName} </h1>
        <button className='btn btn-warning w-100 fs-3 fst-italic' onClick={changeName}> Change Name </button>
    </>
  )
}

export default User;
