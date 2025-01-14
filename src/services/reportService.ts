import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reports';

export const generateReport = async (reportType, startDate, endDate) => {
  const response = await axios.post(`${API_URL}/${reportType}`, { startDate, endDate });
  return response.data;
};

// Add more methods for generating different types of reports