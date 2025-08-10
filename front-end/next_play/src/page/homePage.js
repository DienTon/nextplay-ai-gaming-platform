import { useEffect, useState } from "react";
import "../css/home/homePageStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <div className="homepage-root">
        {/* Navbar */}
      <div style={{width: 1920, height: 53.50, position: 'relative', background: 'white', borderBottom: '1px rgba(0, 0, 0, 0.10) solid'}}>
  <div style={{width: 28, height: 28, left: 302, top: 12.25, position: 'absolute', background: 'linear-gradient(135deg, #2B7FFF 0%, #9810FA 100%)', borderRadius: 8.75}}>
    <div style={{width: 17.34, height: 14, left: 5.48, top: 5.25, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 12.30, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 17.50, wordWrap: 'break-word'}}>NP</div>
  </div>
  <div style={{width: 72.73, height: 21, left: 337, top: 14, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 17.50, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 24.50, wordWrap: 'break-word'}}>Nextplay</div>
  <div style={{width: 223.47, height: 21, left: 568.66, top: 15.75, position: 'absolute'}}>
    <div style={{width: 33.45, height: 17, left: 0, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Store</div>
    <div style={{width: 40.49, height: 17, left: 54.11, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Forum</div>
    <div style={{width: 52.65, height: 17, left: 115.29, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Reviews</div>
    <div style={{width: 35.15, height: 17, left: 188.65, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0A0A0A', fontSize: 14, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>News</div>
  </div>
  <div style={{width: 392, height: 31.50, left: 972.31, top: 10.50, position: 'absolute', background: '#F3F3F5', overflow: 'hidden', borderRadius: 6.75}}>
    <div style={{width: 344.50, height: 14, left: 36, top: 8.75, position: 'absolute', overflow: 'hidden'}}>
      <div style={{width: 158.95, height: 12, left: 0, top: 1, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#717182', fontSize: 12.30, fontFamily: 'Segoe UI Symbol', fontWeight: '400', wordWrap: 'break-word'}}>Search games, discussions...</div>
    </div>
    <div style={{width: 344.50, height: 14, left: 36, top: 8.75, position: 'absolute'}} />
  </div>
  <div style={{width: 14, height: 14, left: 982.81, top: 19.25, position: 'absolute'}}>
    <div style={{width: 2.53, height: 2.53, left: 9.72, top: 9.72, position: 'absolute', outline: '1.17px #717182 solid', outlineOffset: '-0.58px'}} />
    <div style={{width: 9.33, height: 9.33, left: 1.75, top: 1.75, position: 'absolute', outline: '1.17px #717182 solid', outlineOffset: '-0.58px'}} />
  </div>
  <div style={{width: 14, height: 14, left: 1595.25, top: 19.25, position: 'absolute'}}>
    <FontAwesomeIcon icon={faUser} />
  </div>
  <div style={{width: 31.50, height: 28, left: 1544.50, top: 12.25, position: 'absolute', borderRadius: 6.75}}>
    <div style={{width: 14, height: 14, left: 8.75, top: 7, position: 'absolute'}}>
        <FontAwesomeIcon icon={faCartShopping} />
    </div>
    <div style={{width: 17.50, height: 17.50, left: 21, top: -7, position: 'absolute', background: '#030213', overflow: 'hidden', borderRadius: 6.75}}>
      <div style={{width: 6.04, height: 11, left: 5.83, top: 2.75, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 10.50, fontFamily: 'Segoe UI Symbol', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>2</div>
    </div>
  </div>
</div>
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
            <img src="https://placehold.co/644x280" alt="Cyberpunk Adventures" />
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
            <button className="btn-createpost">Create New Post</button>
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