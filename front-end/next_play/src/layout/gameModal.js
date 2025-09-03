// GameModal.js
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/layout/modal.css"; // Custom styles for the modal

const GameModal = ({ show, onHide, game }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (show) {
      setQuantity(1); // Reset quantity when modal opens
    }
  }, [show]);

  if (!game) return null;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add logic to add game to cart with selected quantity
    console.log(`Adding ${quantity} copies of ${game.title} to cart`);
    // You can add your cart logic here
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="modal-dark-game"
      contentClassName="modal-content-dark-game"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="glow-text">{game.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <img
            src={game.imageUrl || "https://via.placeholder.com/300x180"}
            alt={game.title}
            style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }}
          />
          <p>{game.description}</p>
          <p>
            <strong>Price:</strong>{" "}
            <span className="text-info">{game.price} $</span>
          </p>
          <p>
            <strong>Release Date:</strong>{" "}
            <span className="text-info">{game.releaseDate} </span>
          </p>
          <p>
            <strong>Update At:</strong>{" "}
            <span className="text-info">{game.createdAt} </span>
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {game.gameGenres.map((g) => g.genre?.name).join(", ")}
          </p>
          
          {/* Quantity Selector */}
          <div className="mt-3 mb-3" style={{ width: "100%" }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <strong>Quantity:</strong>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm"
                  style={{
                    background: "#334155",
                    color: "#fff",
                    border: "1px solid #0dcaf0",
                    width: "35px",
                    height: "35px",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span
                  style={{
                    margin: "0 20px",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    minWidth: "30px",
                    textAlign: "center",
                    color: "#0dcaf0"
                  }}
                >
                  {quantity}
                </span>
                <button
                  className="btn btn-sm"
                  style={{
                    background: "#334155",
                    color: "#fff",
                    border: "1px solid #0dcaf0",
                    width: "35px",
                    height: "35px",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Total Price:</span>
              <span className="fw-bold fs-5" style={{ color: "#0dcaf0" }}>
                ${(parseFloat(game.price) * quantity).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button className="btn-neon" onClick={onHide}>
          Close
        </Button>
        <Button 
          className="btn btn-outline-info btn-neon"
          onClick={handleAddToCart}
        >
          Add {quantity} to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameModal;
