// frontend/src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Flask backend URL

export const submitText = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate`, { text });
    return response.data;
  } catch (error) {
    console.error('Error submitting text:', error);
    return { output: 'Error submitting text' };
  }
};
