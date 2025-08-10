import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // TODO: Gọi API đăng nhập
  };

  const handleLoginWithFacebook = () => {
    console.log("Đăng nhập với Facebook");
    // TODO: Gắn API Facebook
  };

  const handleLoginWithGoogle = () => {
    console.log("Đăng nhập với Google");
    // TODO: Gắn API Google
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Đăng Nhập</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <a href="/register">Đăng ký tài khoản mới</a>
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
