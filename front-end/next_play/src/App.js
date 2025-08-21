import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // hoặc './App.css' nếu bạn để Tailwind ở đó
import HomePage from './page/homePage'; // Nếu có trang chủ
import NextplayWebsite from './page/homePage';
import LoginPage from './component/auth/loginPage'; // Trang đăng nhập
import MainLayout from "./layout/MainLayout";
import ListGamePage from './component/store/listGamePage';
import AdminPage from './page/adminPage';
import RegisterPage from './component/auth/registerPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
        <Route path="/games" element={<NextplayWebsite />} /> {/* Trang game store + forum */}
        <Route path="/auth/login" element={<LoginPage />} /> {/* Trang đăng nhập */}
        <Route path="/auth/register" element={<RegisterPage />} /> {/* Trang đăng ký */}  
        <Route path="/games/list" element={<ListGamePage />} /> {/* Trang danh sách game */}
        <Route path="/admin" element={<AdminPage />} /> {/* Trang quản trị viên */}
        {/* Thêm các route khác nếu cần */}
      </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
