import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as gameService from "../../../service/store/gameService";
import GameModal from "../../../layout/gameModal";

const GameManager = () => {
  const [games, setGames] = useState([]);
  const [currentPage] = useState(0);
  const [pageSize] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => { getAllGames(); }, []);

  const getAllGames = async () => {
    try {
      const response = await gameService.getAllGames(currentPage, pageSize);
      if (response.content && Array.isArray(response.content)) setGames(response.content);
      else console.error("Invalid response format", response.content);
    } catch (error) { console.error("Error fetching games list", error); }
  };

  const openModal = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  return (
    <section style={{ background: "linear-gradient(180deg, #1e293b, #0f172a)", minHeight: "100vh", padding: "40px 0" }}>
      <div className="container">
        <h2 className="text-center text-white mb-5" style={{ fontWeight: 700, borderBottom: "3px solid #0dcaf0", display: "inline-block", paddingBottom: "8px" }}>
          Game Management
        </h2>

        <div className="mb-4 text-end">
          <Link to="/admin/games/add" className="btn btn-success">
            Add New Game
          </Link>
        </div>

        <div className="row g-4">
          {games.map((game, index) => (
            <div key={game.id || index} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card h-100 text-white"
                style={{ background: "#1e293b", border: "none", borderRadius: "12px", transition: "transform 0.3s, box-shadow 0.3s", overflow: "hidden", cursor: "pointer" }}
                onClick={() => openModal(game)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 0 20px #0dcaf0"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <img src={game.imageUrl || "https://via.placeholder.com/300x180"} className="card-img-top" alt={game.title} style={{ height: "180px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{game.title}</h5>
                  <div className="mb-2" style={{ minHeight: "40px", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    {game.gameGenres && game.gameGenres.length > 0 ? (
                      game.gameGenres.slice(0, 2).map((g, idx) => (
                        <span 
                          key={idx} 
                          className="badge me-1 mb-1" 
                          style={{ 
                            background: "#0dcaf0", 
                            fontSize: "0.7rem",
                            maxWidth: "80px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "inline-block"
                          }}
                          title={g.genre.name} // Tooltip để xem tên đầy đủ
                        >
                          {g.genre.name}
                        </span>
                      ))
                    ) : (
                      <span className="badge" style={{ background: "#6c757d", fontSize: "0.7rem" }}>
                        No Genre
                      </span>
                    )}
                    {game.gameGenres && game.gameGenres.length > 2 && (
                      <span 
                        className="badge mb-1" 
                        style={{ background: "#6c757d", fontSize: "0.7rem" }}
                        title={`${game.gameGenres.slice(2).map(g => g.genre.name).join(', ')}`}
                      >
                        ...
                      </span>
                    )}
                  </div>
                  <p className="card-text" style={{ flexGrow: 1 }}>{game.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fw-bold text-info">${game.price}</span>
                    <div>
                      <button className="btn btn-sm btn-outline-light me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="card-footer" style={{ fontSize: "0.8rem" }}>
                  Release: {new Date(game.releaseDate).toLocaleDateString()} <br />
                  Created: {new Date(game.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Detail Modal */}
      <GameModal show={showModal} onHide={() => setShowModal(false)} game={selectedGame} />
    </section>
  );
};

export default GameManager;
