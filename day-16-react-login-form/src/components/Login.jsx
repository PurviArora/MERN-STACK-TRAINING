import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";   

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(userName);
        console.log(password);
        localStorage.setItem("fullName", userName);
        navigate("/dashboard");

        setUserName("")
        setPassword("")
    }

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0F172A, #1E293B, #334155)"
        }}>
        <form
            className="w-50 border border-5 border-success p-5 m-auto text-white rounded-3" onSubmit={handleSubmit}
            style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)"
            }}>
            <p className='fs-1 fw-bold border-bottom border-5 border-success rounded-pill text-center'>Login</p>
            <div className="mb-3">
                <label htmlFor="" className='fs-3 mb-2'> UserName </label>
                <input type='text' className='form-control' value={userName} onChange={(event)=>setUserName(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="" className='fs-3 mb-2'> Password </label>
                <input type='password' className='form-control' value={password} onChange={(event)=>setPassword(event.target.value)} />
            </div>
            <div className="mb-3 text-center">
                <input type='submit' className='btn btn-dark fs-5 fst-italic fw-bolder' value="Login" />
            </div>
            <div className='mb-3 text-center'>
                    <p> Don't have an account? <span onClick={()=> navigate("/register")} className='fw-bolder text-decoration-underline'>Register here</span> </p>
                </div>
        </form>
      </div>
    </>
  )
}

export default Login;
