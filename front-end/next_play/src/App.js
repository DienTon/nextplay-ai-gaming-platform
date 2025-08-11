import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // hoặc './App.css' nếu bạn để Tailwind ở đó
import HomePage from './page/homePage'; // Nếu có trang chủ
import NextplayWebsite from './page/homePage';
import LoginPage from './component/auth/loginPage'; // Trang đăng nhập
import MainLayout from "./layout/MainLayout";
import ListGamePage from './component/store/listGamePage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
        <Route path="/games" element={<NextplayWebsite />} /> {/* Trang game store + forum */}
        <Route path="/auth/login" element={<LoginPage />} /> {/* Trang đăng nhập */}
        <Route path="/games/list" element={<ListGamePage />} /> {/* Trang danh sách game */}
        {/* Thêm các route khác nếu cần */}
      </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
