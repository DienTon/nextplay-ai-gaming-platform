import React from 'react'
import "../css/home/homePageStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
    {/* FOOTER */}
      <footer style={{ background: "#1e293b", color: "#94a3b8", padding: "3rem 0" }}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-12 col-lg-4">
              <div className="d-flex align-items-center mb-2">
                <span className="np-logo me-2" style={{ color: "#0dcaf0", fontWeight: "bold" }}>NP</span>
                <h5 className="m-0">NextPlay</h5>
              </div>
              <p>Cửa hàng game và cộng đồng dành cho game thủ Việt. Săn deal, chia sẻ kinh nghiệm, cùng nhau nâng tầm trải nghiệm.</p>
            </div>
            <div className="col-6 col-lg-2">
              <h6 style={{ color: "#0dcaf0" }}>Store</h6>
              <ul className="list-unstyled">
                <li><a href="#pc" style={{ color: "#94a3b8" }}>PC Games</a></li>
                <li><a href="#console" style={{ color: "#94a3b8" }}>Console</a></li>
                <li><a href="#mobile" style={{ color: "#94a3b8" }}>Mobile</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h6 style={{ color: "#0dcaf0" }}>Community</h6>
              <ul className="list-unstyled">
                <li><a href="#forum" style={{ color: "#94a3b8" }}>Forum</a></li>
                <li><a href="#reviews" style={{ color: "#94a3b8" }}>Reviews</a></li>
                <li><a href="#news" style={{ color: "#94a3b8" }}>News</a></li>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <h6 style={{ color: "#0dcaf0" }}>Newsletter</h6>
              <div className="d-flex gap-2">
                <input className="form-control rounded-3" placeholder="Your email" style={{ background: "#ffffffff", border: "1px solid #0dcaf0", color: "#fff" }} />
                <button className="btn" style={{ background: "#0dcaf0", color: "#0f172a", borderRadius: "8px" }}>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <small>© {new Date().getFullYear()} NextPlay</small>
            <small>Terms</small>
            <small>Privacy</small>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;
