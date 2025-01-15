import axios from "axios";

const API_URL = "http://localhost:5000/api/grades";

export const getGrades = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addGrade = async (grade: string) => {
  const response = await axios.post(API_URL, grade);
  return response.data;
};

// Add more methods for updating and deleting grades
