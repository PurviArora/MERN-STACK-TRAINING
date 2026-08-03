import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import { deleteUser } from "../../userApis.js";

import "./UserTable.css";

function UserTable({ users = [], fetchUsers }) { 

  console.log("USERS PROP:", users);

  const navigate = useNavigate();

  const [showDelete, setShowDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      await deleteUser(selectedId, token);

      fetchUsers();

      setShowDelete(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
  <>
    <table className="user-table">

      <thead>
        <tr>
          <th>User</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {users.length > 0 ? (

          users.map((user) => (

            <tr key={user._id}>

              <td>

                <div className="user-info">

                  <div className="avatar">
                    {user.fname?.charAt(0)}
                  </div>

                  <div>
                    <h4>{user.fname} {user.lname}</h4>
                    <span>{user.email}</span>
                  </div>

                </div>

              </td>

              <td>{user.phone}</td>

              <td>
                <span
                  className={
                    user.isActive
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </td>

              <td>

                <div className="actions">

                  <button onClick={() => navigate(`/user/${user._id}`)}>
                    <FaEye />
                  </button>

                  <button onClick={() => navigate(`/edit-user/${user._id}`)}>
                    <FaEdit />
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDelete(user._id)}
                  >
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>

          ))

        ) : (

          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No users found
            </td>
          </tr>

        )}

      </tbody>

    </table>

    <DeleteModal
      show={showDelete}
      onCancel={() => setShowDelete(false)}
      onConfirm={confirmDelete}
    />
  </>
);

  
}

export default UserTable;