import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // hoặc './App.css' nếu bạn để Tailwind ở đó
import HomePage from './page/homePage'; // Nếu có trang chủ
import NextplayWebsite from './page/homePage';
import LoginPage from './page/auth/loginPage'; // Trang đăng nhập


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
        <Route path="/games" element={<NextplayWebsite />} /> {/* Trang game store + forum */}
        <Route path="/auth/login" element={<LoginPage />} /> {/* Trang đăng nhập */}
        {/* Thêm các route khác nếu cần */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
