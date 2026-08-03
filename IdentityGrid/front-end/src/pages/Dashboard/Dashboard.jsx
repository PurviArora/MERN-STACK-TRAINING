import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUserShield,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../userApis";
import StatCard from "../../components/StatCard/StatCard";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import UserTable from "../../components/UserTable/UserTable";
import ActivityTimeline from "../../components/ActivityTimeline/ActivityTimeline";


import "./Dashboard.css";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getAllUsers(token);

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.isActive
  ).length;

  const inactiveUsers = users.filter(
    (user) => !user.isActive
  ).length;

  const admins = users.filter(
    (user) => user.role === "Admin"
  ).length;

  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>
          {greeting} {user ? user.fname : "User"} 👋
        </h1>
        <p>Here's what's happening with your users today.</p>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Users"
          value={totalUsers}
          change={`${totalUsers} Registered Users`}
          icon={<FaUsers />}
          color="#2563EB"
        />

        <StatCard
          title="Active Users"
          value={activeUsers}
          change={`${activeUsers} Currently Active`}
          icon={<FaUserCheck />}
          color="#22C55E"
        />

        <StatCard
          title="Inactive Users"
          value={inactiveUsers}
          change={`${inactiveUsers} Currently Inactive`}
          icon={<FaUserTimes />}
          color="#F59E0B"
        />

        <StatCard
          title="Admins"
          value={admins}
          change={`${admins} Administrator`}
          icon={<FaUserShield />}
          color="#8B5CF6"
        />
      </div>

      <div className="dashboard-grid">

        <UserTable
          users={users.slice(0, 7)}
          fetchUsers={fetchUsers}
        />

        <DashboardCard title="Recent Activities">
            <ActivityTimeline />
        </DashboardCard>

      </div>

    </div>
  );
}

export default Dashboard;