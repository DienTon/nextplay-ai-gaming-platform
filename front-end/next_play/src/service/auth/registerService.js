import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/register";

const register = async (userData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(API_URL, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export default {
  register,
};
