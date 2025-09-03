import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  // Kiểm tra đăng nhập
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  // Kiểm tra quyền truy cập nếu có yêu cầu role cụ thể
  if (requiredRole && userRole !== requiredRole) {
    return (
      <div
        style={{
          background: "#0f172a",
          color: "#fff",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px"
        }}
      >
        <div
          style={{
            background: "#1e293b",
            borderRadius: "12px",
            padding: "40px",
            textAlign: "center",
            border: "1px solid #dc3545",
            maxWidth: "400px"
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              color: "#dc3545",
              marginBottom: "20px"
            }}
          >
            🚫
          </div>
          <h2 style={{ color: "#dc3545", marginBottom: "15px" }}>
            Không có quyền truy cập
          </h2>
          <p style={{ color: "#cbd5e1", marginBottom: "20px" }}>
            Bạn không có quyền truy cập vào trang này. Trang này chỉ dành cho {requiredRole}.
          </p>
          <p style={{ color: "#6c757d", fontSize: "0.9rem", marginBottom: "25px" }}>
            Quyền hiện tại của bạn: <span style={{ color: "#0dcaf0" }}>{userRole || "Chưa xác định"}</span>
          </p>
          <button
            className="btn"
            style={{
              background: "#0dcaf0",
              color: "#0f172a",
              border: "none",
              padding: "12px 30px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onClick={() => window.history.back()}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0bb5d1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0dcaf0";
            }}
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;