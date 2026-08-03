import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import AddUser from "../pages/AddUser/AddUser";
import EditUser from "../pages/EditUser/EditUser";
import UserDetails from "../pages/UserDetails/UserDetails";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";


function AppRoutes() {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="edit-user/:id" element={<EditUser />} />
        <Route path="/user/:id" element={<UserDetails />}/>
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/settings" element={<Settings />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;