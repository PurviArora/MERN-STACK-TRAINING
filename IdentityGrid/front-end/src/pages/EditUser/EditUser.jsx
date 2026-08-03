import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateModal from "../../components/UpdateModal/UpdateModal";

import {
  getUserById,
  updateUser,
} from "../../userApis.js";

import "./EditUser.css";

function EditUser() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [showUpdate, setShowUpdate] = useState(false);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    isActive: true,
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {

      const token = localStorage.getItem("token");

      const response = await getUserById(id, token);

      setFormData({
        fname: response.data.fname,
        lname: response.data.lname,
        email: response.data.email,
        phone: response.data.phone,
        isActive: response.data.isActive,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "isActive"
          ? value === "true"
          : value,
    });

  };

  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{

      await updateUser(
        id,
        formData,
        localStorage.getItem("token")
      );


      setShowUpdate(true);


    }
    catch(error){

      console.log(error);

    }

    };

  return (

    <div className="edit-user-page">

      <div className="page-header">

        <h1>Edit User</h1>

        <p>
          Update user information.
        </p>

      </div>

      <div className="edit-user-card">

        <form
          className="user-form"
          onSubmit={handleSubmit}
        >

          <div className="form-grid">

            <div className="form-group">

              <label>First Name</label>

              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Last Name</label>

              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Status</label>

              <select
                name="isActive"
                value={formData.isActive}
                onChange={handleChange}
              >

                <option value={true}>
                  Active
                </option>

                <option value={false}>
                  Inactive
                </option>

              </select>

            </div>

          </div>

          <div className="form-buttons">

            <button
              className="save-btn"
              type="submit"
            >
              Update User
            </button>

          </div>

        </form>

      </div>

      <UpdateModal

        show={showUpdate}

        onClose={() => navigate("/users")}

        />

    </div>

  );
}

export default EditUser;