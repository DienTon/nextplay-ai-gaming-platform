import React, { useState } from 'react';
import axios from 'axios';

export const AddNewGame = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:8080/api/admin/games', {
        name,
        description,
        genre
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("Thêm game thành công!");
      setName("");
      setDescription("");
      setGenre("");
    } catch (error) {
      setMessage("Lỗi khi thêm game!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Thêm Game Mới</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Tên game"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Thể loại"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Mô tả"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Thêm game</button>
      </form>
      {message && <div style={styles.message}>{message}</div>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
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
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "60px",
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
  message: {
    marginTop: "15px",
    color: "green",
  },
};
