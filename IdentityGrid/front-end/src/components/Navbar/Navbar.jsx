import {
  FaBars,
  FaSearch,
  FaMoon,
  FaChevronDown,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../LogoutModal/LogoutModal";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./Navbar.css";


function Navbar({ setSidebarOpen, sidebarOpen }) {

  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  const [search, setSearch] = useState("");

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={sidebarOpen ? "navbar": "navbar expanded"}>

      <div className="navbar-left">


        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(prev => !prev)}
          >
          <FaBars />
        </button>



        <div className="search-bar">

  <div className="search-box">

    <input
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {

          navigate(`/users?search=${search}`);

          setSearch("");

        }
      }}
    />

    <button
      className="search-btn"
      onClick={() => navigate(`/users?search=${search}`)}
    >
      <FaSearch />
      Search
    </button>

  </div>

</div>


      </div>



      <div className="navbar-right">


        {/* Theme Toggle */}

        <button
            className="icon-btn"
            onClick={toggleTheme}
          >

          {
            darkMode
            ? "☀️"
            : "🌙"
          }

          </button>


        {/* Profile */}

        <div 
          className="profile"
          onClick={() => setOpenProfile(!openProfile)}
        >

          <div className="profile-img"></div>


          <div className="profile-info">

            <h4>
              Purvi Arora
            </h4>

            <p>
              Administrator
            </p>

          </div>


          <FaChevronDown className="profile-arrow"/>



          {
            openProfile && (

              <div className="profile-menu">


                <button
                  onClick={() => navigate("/profile")}
                >

                  <FaUserCog />

                  Profile Settings

                </button>



                <button
                  onClick={() => setShowLogout(true)}
                >

                  <FaSignOutAlt />

                  Logout

                </button>


              </div>

            )
          }


        </div>


      </div>

      <LogoutModal

          show={showLogout}

          onCancel={() => setShowLogout(false)}

          onConfirm={() => navigate("/")}

        />

    </header>
  );
}

export default Navbar;