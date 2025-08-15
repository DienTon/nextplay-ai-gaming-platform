// GameModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/layout/modal.css"; // Custom styles for the modal

const GameModal = ({ show, onHide, game }) => {
  if (!game) return null;

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
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button className="btn-neon" onClick={onHide}>
          Close
        </Button>
        <Button className="btn btn-outline-info btn-neon">Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameModal;
