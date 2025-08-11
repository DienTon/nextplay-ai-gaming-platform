import { useEffect, useState } from "react";
import "../css/home/homePageStyle.css";


function HomePage() {
  return (
    <div className="homepage-root">
        {/* Navbar */}
      
      {/* Main Container */}
      <div className="homepage-main">
        {/* Hero Section */}
        <section className="homepage-hero">
          <div className="homepage-featured-badge">Featured Game</div>
          <h1 className="homepage-title">Cyberpunk Adventures</h1>
          <p className="homepage-desc">
            Immerse yourself in a dystopian future where<br />
            technology and humanity collide. Experience the<br />
            ultimate RPG adventure.
          </p>
          <div className="homepage-rating">
            <span className="star filled" />
            <span className="star filled" />
            <span className="star filled" />
            <span className="star filled" />
            <span className="star" />
            <span className="homepage-rating-text">4.2 (1,247 reviews)</span>
          </div>
          <div className="homepage-actions">
            <button className="btn-play">
              <span className="icon-play" />
              Play Now - $39.99
            </button>
            <button className="btn-details">View Details</button>
          </div>
          <div className="homepage-hero-img">
            <img src="https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5.jpg" alt="Cyberpunk Adventures" />
            <div className="homepage-hero-img-gradient" />
          </div>
        </section>

        {/* Game Store Section */}
        <section className="homepage-store">
          <div className="homepage-section-header">
            <h2>Game Store</h2>
            <button className="btn-viewall">View All Games</button>
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
            <div className="game-card">
              <div className="game-card-img">
                <img src="https://placehold.co/423x168" alt="Galactic War" />
                <div className="game-card-discount">-25%</div>
                <div className="game-card-genre">Action</div>
              </div>
              <div className="game-card-content">
                <div className="game-card-title">Galactic War</div>
                <div className="game-card-rating">
                  <span className="star filled" />
                  <span className="star filled" />
                  <span className="star filled" />
                  <span className="star filled" />
                  <span className="star" />
                  <span className="game-card-rating-count">(892)</span>
                </div>
                <div className="game-card-price">
                  <span className="current">$29.99</span>
                  <span className="old">$39.99</span>
                </div>
                <button className="btn-addcart">Add to Cart</button>
              </div>
            </div>
            {/* ...Repeat for other games... */}
          </div>
        </section>

        {/* Community Forum Section */}
        <section className="homepage-forum">
          <div className="homepage-section-header">
            <h2>Community Forum</h2>
            <button className="btn-viewallpost">View All</button>
          </div>
          <p className="homepage-forum-desc">
            Connect with fellow gamers and discuss your favorite games
          </p>
          <div className="homepage-forum-list">
            {/* Forum Card Example */}
            <div className="forum-card">
              <div className="forum-card-icon">💬</div>
              <div className="forum-card-content">
                <div className="forum-card-title">General Discussion</div>
                <div className="forum-card-desc">Talk about anything gaming related</div>
                <div className="forum-card-stats">
                  <span>1234 topics</span>
                  <span>8765 posts</span>
                </div>
                <div className="forum-card-latest">
                  <div className="forum-card-latest-title">What's your favorite game of 2024?</div>
                  <div className="forum-card-latest-meta">by GamerPro • 2 hours ago</div>
                </div>
              </div>
            </div>
            {/* ...Repeat for other forum categories... */}
          </div>
        </section>

        {/* Footer */}
        <footer className="homepage-footer">
          <div className="footer-brand">
            <div className="footer-logo">NP</div>
            <div className="footer-title">Nextplay</div>
            <div className="footer-desc">
              Your ultimate destination for gaming. Discover, play, and connect with gamers worldwide.
            </div>
          </div>
          <div className="footer-links">
            <div>
              <div className="footer-link-title">Store</div>
              <ul>
                <li>Browse Games</li>
                <li>New Releases</li>
                <li>Top Sellers</li>
                <li>Free Games</li>
                <li>Wishlist</li>
              </ul>
            </div>
            <div>
              <div className="footer-link-title">Community</div>
              <ul>
                <li>Forum</li>
                <li>Discord</li>
                <li>Reddit</li>
                <li>Events</li>
                <li>Tournaments</li>
              </ul>
            </div>
            <div>
              <div className="footer-link-title">Stay Updated</div>
              <div className="footer-newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
            <span>Support</span>
            <span>© 2024 Nextplay. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;