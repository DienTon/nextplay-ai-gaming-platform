// Tạo file src/component/auth/AuthCallback.js
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const role = searchParams.get('role');

    if (token && email && role) {
      // Lưu vào localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);

      console.log("Token saved:", token);
      console.log("Email saved:", email);
      console.log("Role saved:", role);

      // Redirect về trang chủ hoặc trang mong muốn
      navigate('/');
    } else {
      console.error('Missing authentication data');
      navigate('/auth/login');
    }
  }, [searchParams, navigate]);

  return <div>Processing login...</div>;
};

export default AuthCallback;