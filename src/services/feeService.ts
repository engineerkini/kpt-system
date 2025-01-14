import axios from "axios";

const API_URL = "http://localhost:5000/api/fees";

export const getFees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addFee = async (fee) => {
  const response = await axios.post(API_URL, fee);
  return response.data;
};

// Add more methods for updating and deleting fees
