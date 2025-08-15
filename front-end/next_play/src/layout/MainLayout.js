import React from "react";
import Navbar from '../layout/navbar';
import Sidebar from "../layout/sidebar";
import Footer from "../layout/footer";
import { useLocation } from "react-router-dom";


const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/admin");
  return (
    <>
    {!hideNavbar && <Navbar />}
      <main>{children}</main>
<Footer />
    </>
  );
};

export default MainLayout;
