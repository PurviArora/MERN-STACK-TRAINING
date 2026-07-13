import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginWithUser = () => {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[fname,setFname] = useState('');
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(fname);
        console.log(userName);
        console.log(password);

        localStorage.setItem("fullName",fname)
        navigate("/dashboard")

        setPassword("")
        setUserName("");
        setFname("");
    }

  return (
    <>
        <div className="container">
        <form className="w-50 border border-5 border-success p-5 m-auto text-white rounded-3"
            style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)"
            }}
            onSubmit={handleSubmit}>

            <p className="fs-2 fw-bolder fst-italic border-bottom border-5 border-success rounded-pill text-center">
                Login
            </p>

            <div className="mb-3">
                <label>Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={fname}
                    onChange={(e)=>setFname(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>User Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className="btn btn-dark"
                value="Login"
            />

        </form>
        
      </div>
    </>
  )
}

export default LoginWithUser;
