import { registerUser } from "../../userApis.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "../../styles/auth.css";


function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });


  const handleSubmit = async (e) => {

    e.preventDefault();


    if(formData.password !== formData.confirmPassword){
      alert("Passwords do not match");
      return;
    }


    try {

      const response = await registerUser(formData);

      console.log(response.data);

      alert("Registration Successful");

      navigate("/");


    } catch(error){

      console.log(error);

      alert("Registration Failed");

    }

  };


  return (

    <div className="auth-page">

      <div className="auth-left">

        <div className="branding">

          <span className="branding-badge">
            USER MANAGEMENT PLATFORM
          </span>


          <h1>
            IdentityGrid
          </h1>


          <p>
            Create your account to securely manage users,
            permissions and organizational data.
          </p>



          <div className="mockup">


            <div className="mock-top">


              <div className="logo-box">

                <div className="logo-icon"></div>

                IdentityGrid

              </div>


              <div className="avatar"></div>


            </div>



            <div className="stat-grid">


              <div className="stat-card">

                <h5>Organizations</h5>

                <h2>28</h2>

              </div>



              <div className="stat-card">

                <h5>Users</h5>

                <h2>1248</h2>

              </div>


            </div>



            <div className="chart-card">


              <div className="chart-title">
                Growth
              </div>


              <div className="chart">

                <span style={{height:"40%"}}></span>

                <span style={{height:"55%"}}></span>

                <span style={{height:"75%"}}></span>

                <span style={{height:"65%"}}></span>

                <span style={{height:"90%"}}></span>

                <span style={{height:"100%"}}></span>


              </div>


            </div>


          </div>


        </div>


      </div>




      <div className="auth-right">


        <div className="auth-card register-card">


          <h2>
            Create Account 🚀
          </h2>


          <p className="auth-subtitle">
            Fill in your information to get started.
          </p>



          <form onSubmit={handleSubmit}>


            <div className="input-group">

              <FaUser className="input-icon"/>

              <input
              type="text"
              placeholder="First Name"
              value={formData.fname}
              onChange={(e)=>
                setFormData({
                ...formData,
                fname:e.target.value
                })
              }
              />

            </div>

            <div className="input-group">

              <FaUser className="input-icon"/>

              <input
              type="text"
              placeholder="Last Name"
              value={formData.lname}
              onChange={(e)=>
                setFormData({
                ...formData,
                lname:e.target.value
                })
              }
              />

            </div>


            <div className="input-group">


              <FaEnvelope className="input-icon"/>


              <input

                type="email"

                placeholder="Email"

                value={formData.email}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    email:e.target.value
                  })
                }

                required

              />


            </div>





            <div className="input-group">


              <FaPhone className="input-icon"/>


              <input

                type="text"

                placeholder="Phone Number"

                value={formData.phone}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    phone:e.target.value
                  })
                }

                required

              />


            </div>





            <div className="input-group">


              <FaLock className="input-icon"/>



              <input

                type={showPassword ? "text" : "password"}

                placeholder="Password"

                value={formData.password}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    password:e.target.value
                  })
                }

                required

              />



              <button

                type="button"

                className="eye-btn"

                onClick={() =>
                  setShowPassword(!showPassword)
                }

              >

                {
                  showPassword
                  ? <FaEyeSlash/>
                  : <FaEye/>
                }


              </button>



            </div>





            <div className="input-group">


              <FaLock className="input-icon"/>



              <input

                type={showConfirmPassword ? "text" : "password"}

                placeholder="Confirm Password"

                value={formData.confirmPassword}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    confirmPassword:e.target.value
                  })
                }

                required

              />



              <button

                type="button"

                className="eye-btn"

                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }

              >

                {
                  showConfirmPassword
                  ? <FaEyeSlash/>
                  : <FaEye/>
                }


              </button>



            </div>





            <button

              className="auth-btn"

              type="submit"

            >

              Create Account

            </button>



          </form>





          <div className="auth-footer">


            Already have an account?


            <Link to="/">

              {" "}Login

            </Link>


          </div>



        </div>


      </div>



    </div>

  );

}


export default Register;