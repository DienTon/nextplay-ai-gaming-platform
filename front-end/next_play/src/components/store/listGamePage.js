import React, { useState, useEffect } from "react";
import "../../css/home/homePageStyle.css";
import * as gameService from "../../service/store/gameService";
import GameModal from "../../layout/gameModal";
import * as CartService from "../../service/store/cartService";
function ListGamePage() {
  const [games, setGames] = useState([]);
  const [pageSize, setPageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    try {
      const response = await gameService.getAllGames(currentPage, pageSize);
      if (response.content && Array.isArray(response.content)) {
        setGames(response.content);
      } else {
        console.error("Invalid response format", response.content);
      }
    } catch (error) {
      console.error("Error fetching game list", error);
    }
  };
  const openModal = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const addItemToCart = (game) => {
    CartService.addToCart(game);
    alert("Item added to cart");
  };

  const categories = [
    "All",
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Simulation",
    "Sports",
    "Racing",
  ];
  const filteredGames =
    category === "All" ? games : games.filter((g) => g.genre === category);

  return (
    <div
      style={{
        background: "#0f172a",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2
            className="fw-bold"
            style={{
              borderBottom: "3px solid #0dcaf0",
              display: "inline-block",
              paddingBottom: "5px",
            }}
          >
            Game Store
          </h2>
        </div>

        {/* Categories */}
        <div className="d-flex flex-wrap justify-content-center mb-4">
          {categories.map((c, idx) => (
            <button
              key={idx}
              className={`btn m-1 ${
                category === c ? "text-dark" : "btn-outline-light"
              }`}
              style={{
                background: category === c ? "#0dcaf0" : "transparent",
                borderColor: "#0dcaf0",
                transition: "0.3s",
              }}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Game Grid */}
        <div className="row g-4" >
          {filteredGames.map((game, idx) => (
            <div className="col-12 col-sm-6 col-lg-3" key={idx} onClick={() => openModal(game)}>
              <div
                className="game-card"
                style={{
                  background: "#1e293b",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 20px #0dcaf0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Game Image */}
                <div className="game-card-img position-relative">
                  <img
                    src={game.imageUrl || "https://via.placeholder.com/300x180"}
                    alt={game.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "#0dcaf0",
                      color: "#000",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {game.gameGenres.map((g) => g.genre.name).join(" | ")}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-3 d-flex flex-column">
                  <h5 className="fw-bold">{game.title}</h5>
                  <div className="d-flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{ color: i < 4 ? "#ffc107" : "#6c757d" }}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ms-2">(892)</span>
                  </div>
                  <p style={{ flexGrow: 1, fontSize: "0.9rem" }}>
                    {game.description?.substring(0, 60)}...
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fw-bold" style={{ color: "#0dcaf0" }}>
                      {game.price}
                    </span>
                    <button
                      className="btn btn-outline-light btn-sm"
                      style={{
                        borderColor: "#0dcaf0",
                        color: "#0dcaf0",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#0dcaf0";
                        e.currentTarget.style.color = "#0f172a";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#0dcaf0";
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GameModal
        show={showModal}
        onHide={() => setShowModal(false)}
        game={selectedGame}
      />
    </div>
  );
}

export default ListGamePage;
