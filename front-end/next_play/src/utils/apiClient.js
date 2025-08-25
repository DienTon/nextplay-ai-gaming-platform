import axios from "axios";

// Hàm lấy token từ localStorage
const getAuthToken = () => localStorage.getItem('token');

// Hàm chuyển hướng khi không có quyền truy cập
const redirectToLogin = () => {
//   localStorage.removeItem('token'); // Xóa token hết hạn
//   window.location.href = '/auth/login';
};

// Tạo axios instance với cấu hình chung
const apiClient = axios.create({
  baseURL: '',
  timeout: 10000, // 10 giây timeout
});

// Request interceptor - tự động thêm token vào header
apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - tự động xử lý lỗi 401 và các lỗi chung
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      
      switch (status) {
        case 401:
          console.log('Unauthorized - redirecting to login');
          redirectToLogin();
          break;
        case 403:
          console.error('Forbidden - insufficient permissions');
          break;
        case 500:
          console.error('Server error - please try again later');
          break;
        default:
          console.error('API error:', error.response.data);
      }
    } else if (error.request) {
      console.error('Network error - please check your connection');
    } else {
      console.error('Request setup error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
