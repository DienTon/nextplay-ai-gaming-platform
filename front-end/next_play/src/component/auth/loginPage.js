import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../../service/auth/loginService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  if (token) {
    console.log("Token received:", token);
    localStorage.setItem("token", token);
    navigate("/dashboard");
  }
}, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("email:", email);
      console.log("Password:", password);
      
      const response = await loginService.login({ email, password });
      
      if (response && response.token) {
        // Lưu token và thông tin user
        localStorage.setItem("token", response.token);
        localStorage.setItem("email", response.email);
        localStorage.setItem("role", response.role);
        
        console.log("Login successful:", response);
        
        // Chuyển hướng dựa trên role
        if (response.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        alert("Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 401) {
        alert("Sai email hoặc mật khẩu");
      } else {
        alert("Lỗi kết nối server");
      }
    }
  };

  const handleLoginWithFacebook = () => {
    console.log("Đăng nhập với Facebook");
    // TODO: Gắn API Facebook
  };

  const handleLoginWithGoogle = () => {
    console.log("Đăng nhập với Google");
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Đăng Nhập</h2>
      <form onSubmit={handleSubmit} style={styles.form} method="POST">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Đăng nhập
        </button>
      </form>

      <div style={styles.socialContainer}>
        <button onClick={handleLoginWithFacebook} style={styles.facebook}>
          Đăng nhập với Facebook
        </button>
        <button onClick={handleLoginWithGoogle} style={styles.google}>
          Đăng nhập với Google
        </button>
      </div>

      <div style={styles.links}>
        <a href="/forgot-password">Quên mật khẩu?</a>
        <Link to={"/auth/register"}>Đăng ký tài khoản mới</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  socialContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  google: {
    backgroundColor: "#db4a39",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  links: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
};
