import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGamepad,
  faDesktop,
  faMobileAlt,
  faHeadset,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "../css/home/homePageStyle.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HomePage() {


  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  console.log("Token:", token);
  console.log("Email:", email);
  console.log("Role:", role);
   
  
  // <div>
  //   {role === "ADMIN" && <AdminPanel />}
  //   {role === "USER" && <UserPanel />}
  // </div>
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{ background: "#0f172a", color: "#fff" }}
      className="homepage-root"
    >
      {/* HERO */}
      <section
        className="hero-section d-flex align-items-center position-relative"
        style={{ minHeight: "80vh" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(15,23,42,0.9)), url('https://images.unsplash.com/photo-1611605691419-d5a0d9c0a9e3?fit=crop&w=1600&q=80') center/cover no-repeat",
            zIndex: 0,
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <span
            className="badge badge-featured"
            style={{
              border: "1px solid #0dcaf0",
              color: "#0dcaf0",
              padding: "0.25rem 0.5rem",
              fontWeight: "bold",
            }}
          >
            FEATURED
          </span>
          <h1
            className="display-4 fw-bold mt-3 mb-2"
            style={{ color: "#0dcaf0", textShadow: "0 0 10px #0dcaf0" }}
          >
            Don’t Just Play. <span style={{ color: "#fff" }}>NextPlay.</span>
          </h1>
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.2rem",
              marginBottom: "2rem",
            }}
          >
            Cửa hàng game hiện đại cùng cộng đồng thảo luận sôi động...
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <a
              href="#store"
              className="btn"
              style={{
                backgroundColor: "#0dcaf0",
                color: "#0f172a",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                borderRadius: "8px",
                transition: "0.3s",
              }}
            >
              Shop Now
            </a>
            <a
              href="#forum"
              className="btn"
              style={{
                border: "2px solid #0dcaf0",
                color: "#0dcaf0",
                background: "transparent",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                borderRadius: "8px",
                transition: "0.3s",
              }}
            >
              Join the Forum
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="store" className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0" style={{ color: "#0dcaf0" }}>
              Explore Categories
            </h2>
            <a
              className="btn"
              style={{ color: "#0dcaf0", border: "1px solid #0dcaf0" }}
              href="#all"
            >
              View all
            </a>
          </div>
          <div className="row g-4">
            {[
              { icon: faDesktop, title: "PC Games" },
              { icon: faGamepad, title: "Console Games" },
              { icon: faMobileAlt, title: "Mobile Games" },
              { icon: faHeadset, title: "Accessories" },
            ].map((c, i) => (
              <div className="col-12 col-sm-6 col-lg-3" key={i}>
                <div
                  className="card category-card reveal-on-scroll"
                  style={{
                    background: "#1e293b",
                    border: "1px solid #0dcaf0",
                    borderRadius: "12px",
                    transition: "0.3s",
                  }}
                >
                  <div className="card-body d-flex align-items-center">
                    <div
                      className="icon-wrap me-3"
                      style={{ fontSize: "1.5rem", color: "#0dcaf0" }}
                    >
                      <FontAwesomeIcon icon={c.icon} />
                    </div>
                    <div>
                      <h5 className="mb-1">{c.title}</h5>
                      <small style={{ color: "#94a3b8" }}>Discover more</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEALS CAROUSEL */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0" style={{ color: "#0dcaf0" }}>
              Special Deals
            </h2>
            <span style={{ color: "#94a3b8" }}>Limited time offers</span>
          </div>

          <div
            id="dealCarousel"
            className="carousel slide reveal-on-scroll"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded-4 shadow">
              {[
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?q=80&w=1400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1585079542156-2755d9c8affd?q=80&w=1400&auto=format&fit=crop",
              ].map((src, idx) => (
                <div
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  key={idx}
                >
                  <img
                    src={src}
                    className="d-block w-100"
                    alt={`deal-${idx}`}
                    style={{ borderRadius: "12px" }}
                  />
                  <div className="carousel-caption d-none d-md-block text-start">
                    <span className="badge bg-danger">-50%</span>
                    <h5 className="mt-2">Hot Bundle #{idx + 1}</h5>
                    <p>Nhận ưu đãi hấp dẫn cho tựa game yêu thích.</p>
                    <a
                      href="#buy"
                      className="btn"
                      style={{
                        background: "#0dcaf0",
                        color: "#0f172a",
                        borderRadius: "8px",
                      }}
                    >
                      Get Deal
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#dealCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#dealCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* FORUM */}
      <section id="forum" className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0" style={{ color: "#0dcaf0" }}>
              Community Forum
            </h2>
            <a
              className="btn"
              style={{ border: "1px solid #0dcaf0", color: "#0dcaf0" }}
              href="#join"
            >
              Join the Conversation
            </a>
          </div>
          <div className="row g-4 ">
            {[
              {
                title: "Hỏi đáp cấu hình chơi mượt FPS 120+",
                excerpt: "Mọi người tư vấn giúp build PC tầm trung…",
                replies: 42,
              },
              {
                title: "Chia sẻ mod hay cho game sandbox",
                excerpt: "Bộ mod đồ họa này làm game khác bọt hẳn…",
                replies: 31,
              },
              {
                title: "Review nhanh bản cập nhật mới",
                excerpt: "Meta thay đổi khá mạnh ở late game…",
                replies: 19,
              },
            ].map((t, i) => (
              <div className="col-12" key={i}>
                <div
                  className="card forum-card reveal-on-scroll"
                  style={{
                    background: "#1e293b",
                    border: "1px solid #0dcaf0",
                    borderRadius: "12px",
                  }}
                >
                  <div className="card-body d-flex align-items-center">
                    <div
                      style={{
                        fontSize: "1.5rem",
                        color: "#0dcaf0",
                        marginRight: "1rem",
                      }}
                    >
                      <FontAwesomeIcon icon={faComments} />
                    </div>
                    <div className="flex-grow-1">
                      <h5>{t.title}</h5>
                      <p style={{ color: "#94a3b8", marginBottom: "0.5rem" }}>
                        {t.excerpt}
                      </p>
                      <small style={{ color: "#94a3b8" }}>
                        {t.replies} replies • 5m ago
                      </small>
                    </div>
                    <a
                      className="btn"
                      style={{
                        border: "1px solid #0dcaf0",
                        color: "#0dcaf0",
                        borderRadius: "8px",
                      }}
                      href="#read"
                    >
                      Read
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
