import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // hoặc './App.css' nếu bạn để Tailwind ở đó
import HomePage from './page/homePage'; // Nếu có trang chủ
import NextplayWebsite from './page/homePage';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
        <Route path="/games" element={<NextplayWebsite />} /> {/* Trang game store + forum */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
