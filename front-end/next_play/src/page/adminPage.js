import React,{useState} from "react";
import GameManager from "../component/admin/gameManager";

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const renderContent = () => {
    switch (activeComponent) {
      case "manageGames":
        return <GameManager />;
      case "manageUsers":
        return <div>Manage Users Component</div>;
      default:
        return <div>Welcome to the Dashboard</div>;
    }
  };
  return (
    <div className="row">
      {/* Sidebar */}
      <div className="col-2">
        <div className="list-group">
          <button
            className={`list-group-item list-group-item-action ${
              activeComponent === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`list-group-item list-group-item-action ${
              activeComponent === "manageUsers" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("manageUsers")}
          >
            Manage Users
          </button>
          <button
            className={`list-group-item list-group-item-action ${
              activeComponent === "manageGames" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("manageGames")}
          >
            Manage Games
          </button>
          <button className="list-group-item list-group-item-action">
            Reports
          </button>
          <button className="list-group-item list-group-item-action">
            Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPage;
