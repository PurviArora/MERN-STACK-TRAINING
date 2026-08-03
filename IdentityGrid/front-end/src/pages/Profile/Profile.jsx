import "./Profile.css";

function Profile() {

  return (

    <div className="profile-page">


      <div className="page-header">

        <h1>
          Profile
        </h1>

        <p>
          Manage your account information.
        </p>

      </div>



      <div className="profile-card">


        <div className="profile-top">


          <div className="profile-avatar">
            PA
          </div>


          <div>

            <h2>
              Purvi Arora
            </h2>

            <p>
              Administrator
            </p>

          </div>


        </div>



        <div className="profile-form">


          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              value="Purvi Arora"
              readOnly
            />

          </div>



          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              value="purvi@example.com"
              readOnly
            />

          </div>



          <div className="form-group">

            <label>
              Role
            </label>

            <input
              value="Administrator"
              readOnly
            />

          </div>



          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              placeholder="Enter phone number"
            />

          </div>


        </div>



        <button className="save-profile">
          Save Changes
        </button>


      </div>



      <div className="password-card">


        <h2>
          Change Password
        </h2>


        <div className="profile-form">


          <div className="form-group">

            <label>
              Current Password
            </label>

            <input
              type="password"
              placeholder="Current password"
            />

          </div>



          <div className="form-group">

            <label>
              New Password
            </label>

            <input
              type="password"
              placeholder="New password"
            />

          </div>


        </div>


        <button className="save-profile">
          Update Password
        </button>


      </div>


    </div>

  );
}


export default Profile;