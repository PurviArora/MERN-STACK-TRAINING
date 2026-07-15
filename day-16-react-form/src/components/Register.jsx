import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname : "",
        email : "",
        phone : "",
        password : ""
    })

    const handleChange =(e)=>{
        // destructure object
        const {name,value} = e.target;

        setFormData(values=>({...values, [name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        
        localStorage.setItem("fullName", formData.fname);
        
        navigate("/dashboard");
        setFormData({
        fname:"",
        email:"",
        phone:"",
        password:""
        });
    }

  return (
    <>
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0F172A, #1E293B, #334155)"
        }}>
            <form className='w-50 border border-5 border-success p-5 m-auto text-white' onSubmit={handleSubmit}>
                <p className='fs-2 fw-bolder fst-italic border-bottom border-5 border-success rounded-pill text-center'>Register</p>
                <div className="mb-3">
                    <label htmlFor=""> Full Name </label>
                    <input type='text' className='form-control' name='fname' value={formData.fname} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor=""> Email Address </label>
                    <input type='email' className='form-control' name='email' value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor=""> Phone Number </label>
                    <input type='text' className='form-control' name='phone' value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='fs-3 mb-2'> Password </label>
                    <input type='password' className='form-control' name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="mb-3 text-center">
                    <input type='submit' className='btn btn-dark fs-5 fst-italic fw-bolder' value="Register" />
                </div>
                <div className='mb-3 text-center'>
                    <p>Already Register? <span onClick={()=> navigate("/")} className='fw-bolder text-decoration-underline'>Login here</span> </p>
                </div>
            </form>
        </div>
    </>
  )
}

export default Register;