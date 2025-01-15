import axios from "axios";

const API_URL = "http://localhost:5000/api/teachers";

export const getTeachers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTeacher = async (teacher: string) => {
  const response = await axios.post(API_URL, teacher);
  return response.data;
};

// Add more methods for updating and deleting teachers
