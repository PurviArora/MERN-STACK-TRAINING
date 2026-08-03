import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../userApis";

import "./UserDetails.css";

function UserDetails() {

  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("User ID:", id);
      console.log("Token:", token);

      const response = await getUserById(id, token);

      console.log("USER RESPONSE:", response.data);

      setUser(response.data);

    } catch (error) {
      console.log("ERROR:", error);
      console.log("ERROR RESPONSE:", error.response);
    }
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="user-details-page">

      <div className="page-header">
        <h1>User Details</h1>
        <p>View complete user information.</p>
      </div>

      <div className="details-card">

        <div className="profile-section">

          <div className="large-avatar">
            {user.fname.charAt(0)}
            {user.lname.charAt(0)}
          </div>

          <div>
            <h2>
              {user.fname} {user.lname}
            </h2>

            <p>
              {user.isActive ? "Active User" : "Inactive User"}
            </p>
          </div>

        </div>

        <div className="details-grid">

          <div>
            <label>Email</label>
            <p>{user.email}</p>
          </div>

          <div>
            <label>Phone</label>
            <p>{user.phone}</p>
          </div>

          <div>
            <label>Status</label>
            <p>
              {user.isActive ? "Active" : "Inactive"}
            </p>
          </div>

          <div>
            <label>User ID</label>
            <p>{user._id}</p>
          </div>

        </div>

      </div>

    </div>

  );
}

export default UserDetails;