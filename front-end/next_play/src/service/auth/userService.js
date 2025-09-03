import apiClient from "../../utils/apiClient";

export const getUserByEmail = async (email) => {
  try {
    const response = await apiClient.get(`/api/page/user/getByEmail?email=${email}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

export default {
  getUserByEmail,
};
