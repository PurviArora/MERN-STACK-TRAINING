import { useState } from "react";
import { registerUser } from "../../userApis.js";
import "./AddUser.css";

function AddUser() {

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    status: "Active",
    password: "",
    confirmPassword: ""
  };


  const [userData, setUserData] = useState(initialState);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");


  const handleChange = (e) => {

    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });

  };


  const handleReset = () => {

    setUserData(initialState);

  };

  const validateForm = () => {

  let newErrors = {};


  if (!userData.firstName) {
    newErrors.firstName = "First name is required";
  }


  if (!userData.lastName) {
    newErrors.lastName = "Last name is required";
  }


  if (!userData.email) {
    newErrors.email = "Email is required";
  } 
  else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    newErrors.email = "Enter a valid email";
  }


  if (!userData.phone) {
    newErrors.phone = "Phone number is required";
  }


  if (!userData.role) {
    newErrors.role = "Select a role";
  }


  if (!userData.password) {
    newErrors.password = "Password is required";
  }


  if (userData.password !== userData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }


  setErrors(newErrors);


  return Object.keys(newErrors).length === 0;

};


  const handleSubmit = async (e) => {

  e.preventDefault();

  if(validateForm()){

    try {

      const data = {
        fname: userData.firstName,
        lname: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        isActive: userData.status === "Active"
      };


      const response = await registerUser(data);

      console.log("ADD USER RESPONSE:", response.data);


      setSuccess("User created successfully!");

      setUserData(initialState);


    } catch(error){

      console.log("ADD USER ERROR:", error);

    }

  }

};

  return (
    <div className="add-user-page">


      <div className="page-header">

        <h1>Add New User</h1>

        <p>
          Create a new user account for your organization.
        </p>

      </div>



      <div className="add-user-card">

        {
          success && 
          <p className="success-message">
            {success}
          </p>
        }

        <form 
          className="user-form"
          onSubmit={handleSubmit}
        >


          <div className="form-grid">


            <div className="form-group">

              <label>First Name</label>

              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={userData.firstName}
                onChange={handleChange}
              />

              {
              errors.firstName && 
              <span className="error">
                {errors.firstName}
              </span>
              }

            </div>

            <div className="form-group">

              <label>Last Name</label>

              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={userData.lastName}
                onChange={handleChange}
              />

            </div>



            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={userData.email}
                onChange={handleChange}
              />

            </div>



            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={userData.phone}
                onChange={handleChange}
              />

            </div>



            <div className="form-group">

              <label>Role</label>

              <select
                name="role"
                value={userData.role}
                onChange={handleChange}
              >

                <option value="">
                  Select Role
                </option>

                <option value="Admin">
                  Admin
                </option>

                <option value="User">
                  User
                </option>

              </select>

            </div>



            <div className="form-group">

              <label>Status</label>

              <select
                name="status"
                value={userData.status}
                onChange={handleChange}
              >

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

            </div>



            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={userData.password}
                onChange={handleChange}
              />

            </div>



            <div className="form-group">

              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={userData.confirmPassword}
                onChange={handleChange}
              />

            </div>



          </div>




          <div className="form-buttons">


            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>



            <button
              type="submit"
              className="save-btn"
            >
              Save User
            </button>


          </div>



        </form>


      </div>


    </div>
  );
}


export default AddUser;