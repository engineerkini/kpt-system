import axios from "axios";

const API_URL = "http://localhost:5000/api/students";

export const getStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addStudent = async (student: string) => {
  const response = await axios.post(API_URL, student);
  return response.data;
};

// Add more methods for updating and deleting students
