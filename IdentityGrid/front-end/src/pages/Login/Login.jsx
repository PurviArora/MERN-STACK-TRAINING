import { loginUser } from "../../userApis.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "../../styles/auth.css";


function Login() {

  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);


  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e) => {

  e.preventDefault();

  try {

    const response = await loginUser(loginData);

    console.log("LOGIN RESPONSE DATA:", response.data);


    localStorage.setItem(
      "token",
      response.data.token
    );


    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );


    alert(response.data.message);


    navigate("/dashboard");


  } catch(error) {

    console.log(
      "LOGIN ERROR:",
      error.response?.data
    );


    alert(
      error.response?.data?.message ||
      "Login Failed"
    );

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
            Securely manage users, roles, permissions and organizational
            data through one intelligent dashboard.
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

                <h5>Total Users</h5>

                <h2>1,248</h2>

              </div>




              <div className="stat-card">

                <h5>Admins</h5>

                <h2>18</h2>

              </div>



            </div>





            <div className="chart-card">


              <div className="chart-title">
                User Growth
              </div>



              <div className="chart">

                <span style={{ height:"35%" }}></span>

                <span style={{ height:"60%" }}></span>

                <span style={{ height:"45%" }}></span>

                <span style={{ height:"80%" }}></span>

                <span style={{ height:"70%" }}></span>

                <span style={{ height:"95%" }}></span>


              </div>



            </div>



          </div>



        </div>



      </div>





      <div className="auth-rright">


        <div className="auth-card">


          <h2>
            Welcome Back 👋
          </h2>



          <p className="auth-subtitle">
            Sign in to continue to IdentityGrid.
          </p>





          <form onSubmit={handleLogin}>



            <div className="input-group">


              <FaEnvelope className="input-icon" />



              <input

                type="email"

                placeholder="Email Address"

                value={loginData.email}

                onChange={(e)=>
                  setLoginData({
                    ...loginData,
                    email:e.target.value
                  })
                }

                required

              />



            </div>






            <div className="input-group">


              <FaLock className="input-icon" />



              <input

                type={showPassword ? "text" : "password"}

                placeholder="Password"

                value={loginData.password}

                onChange={(e)=>
                  setLoginData({
                    ...loginData,
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
                  ? <FaEyeSlash />
                  : <FaEye />
                }


              </button>




            </div>






            <div className="forgot-password">


              <Link to="/forgot-password">

                Forgot Password?

              </Link>


            </div>





            <button

              className="auth-btn"

              type="submit"

            >

              Sign In

            </button>



          </form>






          <div className="auth-footer">


            Don't have an account?



            <Link to="/register">

              {" "}Create Account

            </Link>



          </div>





        </div>



      </div>



    </div>


  );

}


export default Login;