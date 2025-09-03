import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes, FaChartLine, FaGamepad, FaComments, FaUsers, FaCog } from "react-icons/fa";
import GameManager from "../components/store/gameManage";
import { Link } from "react-router-dom";


export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderContent = () => {
    switch (activeComponent) {
      case "manageGames":
        return <GameManager />;
      case "manageUsers":
        return <div className="p-3">👥 Manage Users Component</div>;
      case "forum":
        return <div className="p-3">💬 Forum Management</div>;
      default:
        return (
          <div className="container mt-4">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ background: "#1e293b" }}>
                  <h5 className="text-info">Sales Overview</h5>
                  <p>📊 Chart placeholder</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ background: "#1e293b" }}>
                  <h5 className="text-primary">Top Selling Games</h5>
                  <ul className="list-unstyled">
                    <li>Cyberpunk 2077 — $59.99</li>
                    <li>Elden Ring — $49.99</li>
                    <li>God of War — $39.99</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="d-flex" style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#fff" }}>
      {/* Sidebar */}
      <div
        className="p-3 position-fixed top-0 start-0 h-100"
        style={{
          width: sidebarOpen ? 220 : 60,
          background: "linear-gradient(180deg, #1e293b, #0f172a)",
          transition: "width 0.3s ease",
          overflow: "hidden",
          zIndex: 1030,
        }}
      >
        <button
          className="btn btn-sm btn-outline-light mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="list-unstyled">
          <li
            className="mb-3"
            onClick={() => setActiveComponent("dashboard")}
            style={{ cursor: "pointer" }}
          >
            <FaChartLine className="me-2 text-info" /> {sidebarOpen && "Dashboard"}
          </li>
          <li
            className="mb-3"
            onClick={() => setActiveComponent("manageGames")}
            style={{ cursor: "pointer" }}
          >
            <FaGamepad className="me-2 text-primary" /> {sidebarOpen && "Games"}
          </li>
          <li
            className="mb-3"
            onClick={() => setActiveComponent("forum")}
            style={{ cursor: "pointer" }}
          >
            <FaComments className="me-2 text-warning" /> {sidebarOpen && "Forum"}
          </li>
          <li
            className="mb-3"
            onClick={() => setActiveComponent("manageUsers")}
            style={{ cursor: "pointer" }}
          >
            <FaUsers className="me-2 text-light" /> {sidebarOpen && "Users"}
          </li>
          <li
            className="mb-3"
            style={{ cursor: "pointer" }}
          >
            <FaCog className="me-2 text-secondary" /> {sidebarOpen && "Settings"}
          </li>
        </ul>
       
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: sidebarOpen ? 220 : 60,
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Navbar */}
        <nav className="navbar navbar-dark" style={{ background: "#1e293b" }}>
          <div className="container-fluid">
          <Link to={"/"} style={{ color: "#fff", textDecoration: "none" }}>
            <span className="navbar-brand">Nextplay Admin</span>
            </Link>
            <form className="d-flex">
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Search..."
                style={{ background: "#334155", border: "none", color: "#fff" }}
              />
            </form>
          </div>
        </nav>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
}
