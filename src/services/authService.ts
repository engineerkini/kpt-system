import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const login = async (credentials: any) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const register = async (user: any) => {
  const response = await axios.post(`${API_URL}/register`, user);
  return response.data;
};

export const forgotPassword = async (email: any) => {
  const response = await axios.post(`${API_URL}/forgot-password`, { email });
  return response.data;
};

// Add more methods for authentication-related operations
