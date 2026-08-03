import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

import "../../styles/auth.css";

function ForgotPassword() {

  return (

    <div className="auth-page">


      <div className="auth-left">

        <div className="branding">


          <span className="branding-badge">
            ACCOUNT RECOVERY
          </span>


          <h1>
            IdentityGrid
          </h1>


          <p>
            Recover your account securely and regain access
            to your user management dashboard.
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

                <h5>
                  Security
                </h5>

                <h2>
                  100%
                </h2>

              </div>



              <div className="stat-card">

                <h5>
                  Protected
                </h5>

                <h2>
                  24/7
                </h2>

              </div>


            </div>



            <div className="chart-card">

              <div className="chart-title">
                Account Security
              </div>


              <div className="chart">

                <span style={{height:"40%"}}></span>
                <span style={{height:"65%"}}></span>
                <span style={{height:"50%"}}></span>
                <span style={{height:"85%"}}></span>
                <span style={{height:"70%"}}></span>
                <span style={{height:"95%"}}></span>

              </div>


            </div>



          </div>


        </div>


      </div>




      <div className="auth-right">


        <div className="auth-card">


          <h2>
            Forgot Password?
          </h2>


          <p className="auth-subtitle">
            Enter your registered email address and
            we will send you a password reset link.
          </p>



          <form>


            <div className="input-group">

              <FaEnvelope className="input-icon"/>


              <input
                type="email"
                placeholder="Email Address"
              />


            </div>



            <button className="auth-btn">

              Send Reset Link

            </button>



          </form>



          <div className="auth-footer">


            <Link to="/">

              ← Back to Login

            </Link>


          </div>



        </div>


      </div>



    </div>

  );

}


export default ForgotPassword;