import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/login";

const login = async (credentials) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(API_URL, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    await axios.post("http://localhost:8080/api/auth/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    localStorage.setItem("email", "");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export default {
  login,
  logout
};
