import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // hoặc './App.css' nếu bạn để Tailwind ở đó
import HomePage from './page/homePage'; // Nếu có trang chủ
import LoginPage from './components/auth/loginPage'; // Trang đăng nhập
import MainLayout from "./layout/MainLayout";
import ListGamePage from './components/store/listGamePage';
import AdminPage from './page/adminPage';
import RegisterPage from './components/auth/registerPage';
import AddNewGame from './components/store/addNewGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AuthCallback from './components/auth/AuthCallBack';
import CartPage from './components/store/cartPage';


function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        {/* Trang công khai */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Trang chỉ dành cho ADMIN */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requiredRole="ADMIN">
              <AdminPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Trang cần đăng nhập (USER hoặc ADMIN) */}
        {/* <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        /> */}
        
        <Route path="/home" element={<HomePage />} /> {/* Trang chủ */}
        <Route path="/auth/register" element={<RegisterPage />} /> {/* Trang đăng ký */}  
        <Route path="/games/list" element={<ListGamePage />} /> {/* Trang danh sách game */}
        {/* admin */}
        <Route path="/admin/games/add" element={<AddNewGame />} /> {/* Thêm game mới */}
      </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
