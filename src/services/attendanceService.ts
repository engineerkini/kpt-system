import axios from "axios";

const API_URL = "http://localhost:5000/api/attendance";

export const getAttendance = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addAttendance = async (attendance: any) => {
  const response = await axios.post(API_URL, attendance);
  return response.data;
};

// Add more methods for updating and deleting attendance records
