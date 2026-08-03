import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../LogoutModal/LogoutModal";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserPlus,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";


function Sidebar({ sidebarOpen }) {

  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/dashboard",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/users",
    },
    {
      title: "Add User",
      icon: <FaUserPlus />,
      path: "/add-user",
    },
    {
      title: "Profile",
      icon: <FaUserCircle />,
      path: "/profile",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <aside className={sidebarOpen ? "sidebar" : "sidebar collapsed"}>

     <div className="logo">
        <h2>IdentityGrid</h2>
    </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span className="icon">{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <button
        className="logout-btn"
        onClick={() => setShowLogout(true)}
      >

        <FaSignOutAlt />

        <span>
          Logout
        </span>

      </button>

        <LogoutModal

          show={showLogout}

          onCancel={() => setShowLogout(false)}

          onConfirm={() => navigate("/")}

        />

    </aside>
  );
}

export default Sidebar;