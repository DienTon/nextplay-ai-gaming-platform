// DropdownSidebar.js
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginService from "../service/auth/loginService";

export default function DropdownSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClickLogout = () => {
    // Call logout function from auth service
    loginService.logout();
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    localStorage.setItem("email", "");
    alert("Logged out successfully");
    window.location.reload(); // Redirect to login page after logout
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="position-relative ms-2">
      <div
        onClick={toggleMenu}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          background: "linear-gradient(180deg, #0f172a, #253449ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          fontSize: "1.2rem",
        }}
      >
        <FaBars />
      </div>

      {menuOpen && (
        <ul
          className="list-unstyled p-2 position-absolute end-0 mt-2"
          style={{
            background: "linear-gradient(180deg, #0f172a, #293a54ff)",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            minWidth: "180px",
            zIndex: 2000,
          }}
        >
          <Link to="/admin" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="d-flex align-items-center p-2 hover-glow">
              <FaHome className="me-2" /> Dashboard
            </li>
          </Link>
          <li className="d-flex align-items-center p-2 hover-glow">
            <FaUser className="me-2" /> Profile
          </li>
          <li className="d-flex align-items-center p-2 hover-glow">
            <FaCog className="me-2" /> Settings
          </li>
          <div onClick={handleClickLogout} style={{ textDecoration: "none", color: "inherit" }}>
            <li className="d-flex align-items-center p-2 hover-glow">
              <FaSignOutAlt className="me-2" /> Logout
            </li>
          </div>
        </ul>
      )}
    </div>
  );
}
