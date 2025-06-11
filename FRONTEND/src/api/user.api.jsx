import { axiosInstance } from "../utils/axiosInstance";

// 🔐 Login
export const login = async (email, password) => {
  try {
    const { data } = await axiosInstance.post('/api/auth/login', { email, password });
    return data;
  } catch (err) {
    const errorMsg = err.response?.data?.error || "Login failed";
    throw new Error(errorMsg);
  }
};

// 🧑 Register
export const register = async (username, email, password) => {
  try {
    const { data } = await axiosInstance.post('/api/auth/register', { username, email, password });
    return data;
  } catch (err) {
    const errorMsg = err.response?.data?.error || "Registration failed";
    throw new Error(errorMsg);
  }
};

// 🔓 Logout
export const logoutApi = async () => {
  try {
    const { data } = await axiosInstance.post('/api/auth/logout');
    return data;
  } catch (err) {
    const errorMsg = err.response?.data?.error || "Logout failed";
    throw new Error(errorMsg);
  }
};

// 🧑‍💼 Get Current User
export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get('/api/auth/me', { withCredentials: true });
    return data.user;
  } catch (err) {
    const errorMsg = err.response?.data?.error || "Failed to fetch user";
    throw new Error(errorMsg);
  }
};

// 🔗 Get All URLs for User
export const getAllUserUrls = async () => {
  try {
    const { data } = await axiosInstance.post('/api/user/urls');
    return data;
  } catch (err) {
    const errorMsg = err.response?.data?.error || "Failed to fetch URLs";
    throw new Error(errorMsg);
  }
};
