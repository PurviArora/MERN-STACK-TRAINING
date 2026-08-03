import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import "./DashboardLayout.css";


function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-layout">

      <Navbar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <Sidebar
        sidebarOpen={sidebarOpen}
      />


      <main
        className={
          sidebarOpen
            ? "main-content"
            : "main-content expanded"
        }
      >
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;