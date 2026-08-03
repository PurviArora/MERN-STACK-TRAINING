import axios from "axios";

const BASE_URL = "http://localhost:9000";

// Register User
export const registerUser = async (userData) => {
  return await axios.post(`${BASE_URL}/save`, userData);
};

// Login User
export const loginUser = async (loginData) => {
  return await axios.post(`${BASE_URL}/login`, loginData);
};

//Get All Users by id
export const getUserById = async (id, token) => {
  return await axios.get(`${BASE_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Get All Users by fname
export const getAllUsers = async (token) => {
  return await axios.get(`${BASE_URL}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update User
export const updateUser = async (id, userData, token) => {
  return await axios.put(`${BASE_URL}/update/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete User
export const deleteUser = async (id, token) => {
  return await axios.delete(`${BASE_URL}/remove/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export const getActivities = async (token) => {
  return await axios.get(`${BASE_URL}/activities`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};