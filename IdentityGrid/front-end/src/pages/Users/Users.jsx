import { getAllUsers } from "../../userApis.js";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import UserTable from "../../components/UserTable/UserTable";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import "./Users.css";

function Users() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  
    useEffect(() => {
    const searchValue = searchParams.get("search");
    if(searchValue){
      setSearch(searchValue);
    }
  }, [searchParams]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getAllUsers(token);
      console.log("GET USERS RESPONSE:", response.data);

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

    const filteredUsers = users.filter((user) => {

  const keyword = search.toLowerCase();

  return (
    user.fname.toLowerCase().includes(keyword) ||
    user.lname.toLowerCase().includes(keyword) ||
    `${user.fname} ${user.lname}`.toLowerCase().includes(keyword) ||
    user.email.toLowerCase().includes(keyword) ||
    user.phone.includes(keyword)
  );

});
  
  return (
    <div className="users-page">

      <div className="users-header">
        
          <div>
            <h1>Users Management</h1>
            <p>Manage all registered users from one place.</p>
          </div>

        <button className="add-user-btn" onClick={() => navigate("/add-user")}>
          <FaPlus />
          Add User
        </button>
        
      </div>

      <div className="users-toolbar">

        <div className="search-user">

          <FaSearch />

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <select>
          <option>All Roles</option>
          <option>Admin</option>
          <option>User</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      <div className="table-container">
        <UserTable
          users={filteredUsers}
          fetchUsers={fetchUsers}
        />
      </div>

    </div>
  );
}

export default Users;