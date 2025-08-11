import React, { useState,useEffect } from 'react';
import { Button, Card } from "react-bootstrap";
import '../../css/home/homePageStyle.css';
import * as gameService from '../../service/store/gameService';

function ListGamePage(props) {
  const [games, setGames] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(0);
  
    useEffect(() => {
      getAllGames();
    }, []);
  
    const getAllGames = async () => {
      try {
        const response = await gameService.getAllGames(currentPage, pageSize);
        if (response.content && Array.isArray(response.content)) {
          console.log(response.data);
          setGames(response.content);
        } else {
          console.error("Invalid response format", response.content);
        }
      } catch (error) {
        console.error("Error fetching blog list", error);
      }
    };
  return (
    <>
    <br></br>
       {/* Game Store Section */}
       <div className="row">
        <div className="col-md-2">
          </div>
        <div className="col-md-8">
         <section className="">
          <div className="homepage-section-header">
            <h2>Game Store</h2>
          </div>
          <div className="homepage-category-list">
            <button className="category active">All Games</button>
            <button className="category">Action</button>
            <button className="category">Adventure</button>
            <button className="category">RPG</button>
            <button className="category">Strategy</button>
            <button className="category">Simulation</button>
            <button className="category">Sports</button>
            <button className="category">Racing</button>
          </div>
          <div className="homepage-game-list">
            {/* Game Card Example */}
            {games.map((game, index) => (
              <>
              <div className="game-card" key={index}>
              <div className="game-card-img">
                <img src="https://cdn-media.sforum.vn/storage/app/media/phuonganh/cyberpunk-2077-1.jpg" alt="Galactic War" />
                <div className="game-card-discount">-25%</div>
                <div className="game-card-genre">{game.genre}</div>
              </div>
              <div className="game-card-content">
                <div className="game-card-title">{game.title}</div>
                <div className="game-card-rating">
                  <span className="star filled" />
                  <span className="star filled" />
                  <span className="star filled" />
                  <span className="star filled" />
                  <span className="star" />
                  <span className="game-card-rating-count">(892)</span>
                </div>
                <div className="game-card-price">
                  <span className="current">{game.price}</span>
                  <span className="old">$39.99</span>
                </div>
                <button className="btn-addcart">Add to Cart</button>
              </div>
            </div>
              </>
            ))}
           
            {/* ...Repeat for other games... */}
          </div>
        </section>
        
        </div>
        <div className="col-md-2">
        </div>
       </div>
    </>
  );
}

export default ListGamePage;
