import React, { useState,useEffect } from 'react';
import { getAllGenre } from '../../../service/store/genreService';
import { addNewGame } from '../../../service/store/gameService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddNewGame() {
  const navigate = useNavigate();
  const [game, setGame] = useState({
    title: "",
    description: "",
    genre: [], // Thay đổi từ genre thành genre array
    price: "",
    imageUrl: ""
  });
  const [genre, setgenre] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllgenre();
  }, []);

  const handleSubmit = async (e) => {
    console.log(game);
    e.preventDefault();
    
    const result = await addNewGame(game);
    if (result) {
      setMessage("Thêm game thành công!");
      setGame({
        title: "",
        description: "",
        genre: [], // Reset genre array
        price: "",
        imageUrl: ""
      });
      navigate("/admin/games");
    } else {
      setMessage("Lỗi khi thêm game!");
    }
  };
  
  const getAllgenre = async () => {
    const genre = await getAllGenre();
    setgenre(genre);
  };

  // Hàm xử lý chọn/bỏ chọn genre
  const handleGenreChange = (genreId) => {
    setGame(prev => {
      const isSelected = prev.genre.includes(genreId);
      if (isSelected) {
        // Bỏ chọn genre
        return { ...prev, genre: prev.genre.filter(id => id !== genreId) };
      } else {
        // Chọn genre
        return { ...prev, genre: [...prev.genre, genreId] };
      }
    });
  };

  return (
    <div style={styles.container}>
      <h2>Thêm Game Mới</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Tên game"
          value={game.title}
          onChange={(e) => setGame({ ...game, title: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Hình ảnh"
          value={game.imageUrl}
          onChange={(e) => setGame({ ...game, imageUrl: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Giá"
          value={game.price}
          onChange={(e) => setGame({ ...game, price: e.target.value })}
          style={styles.input}
          required
        />

        <div style={styles.genreContainer}>
          <label style={styles.label}>Thể loại (chọn nhiều):</label>
          <div style={styles.checkboxContainer}>
            {genre.map((g) => (
              <label key={g.id} style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={game.genre.includes(g.id)}
                  onChange={() => handleGenreChange(g.id)}
                  style={styles.checkbox}
                />
                {g.name}
              </label>
            ))}
          </div>
        </div>
        <textarea
          placeholder="Mô tả"
          value={game.description}
          onChange={(e) => setGame({ ...game, description: e.target.value })}
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
    color: "#715bd3ff",
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
  genreContainer: {
    textAlign: "left",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "block",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxHeight: "150px",
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "14px",
  },
  checkbox: {
    marginRight: "8px",
    cursor: "pointer",
  },
};
