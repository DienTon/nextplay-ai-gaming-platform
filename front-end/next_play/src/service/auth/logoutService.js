import apiClient from "../../utils/apiClient";

const logoutService = {
  logout: async () => {
    try {
      const response = await apiClient.post('/api/auth/logout');
      // Xóa thông tin người dùng khỏi localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      return response;
    } catch (error) {
      // Vẫn xóa thông tin local dù API lỗi
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      throw error;
    }
  }
};

export default logoutService;
