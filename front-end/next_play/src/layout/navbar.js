import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import DropdownSidebar from "../layout/sidebar";
import "../css/home/homePageStyle.css";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Cyberpunk 2077", price: "$29.99" },
    { id: 2, title: "Elden Ring", price: "$59.99" },
  ]);

  const toggleCart = () => setCartOpen(!cartOpen);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ background: "linear-gradient(90deg, #1e293b, #0e1528ff)" }}
    >
      <div className="container d-flex align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span className="np-logo me-2">NP</span>
          <span className="fw-semibold text-white">Nextplay</span>
        </Link>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <Link to="/games/list" className="nav-link text-white">
                Store
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#forum">
                Forum
              </a>
            </li>
          </ul>
        </div>

        {/* Search desktop */}
        <form className="d-none d-lg-flex ms-3 me-3">
          <input
            className="form-control bg-light border-0 rounded-3 px-3"
            type="search"
            placeholder="Search games..."
            style={{ width: 250 }}
          />
        </form>

        {/* Cart dropdown */}
        <div className="position-relative">
          <button
            className="btn position-relative "
            onClick={toggleCart}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "linear-gradient(180deg, #0f172a, #253449ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {cartItems.length}
              </span>
            )}
          </button>

          {cartOpen && (
            <div
              className="dropdown-menu dropdown-menu-end show p-3"
              style={{
                minWidth: "250px",
                right: 0,
                borderRadius: "8px",
                background: "linear-gradient(180deg, #0f172a, #293a54ff)",
                borderRadius: "8px",
              }}
            >
              {cartItems.length === 0 ? (
                <p className="text-white mb-0">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center mb-2 "
                  >
                    <div className="text-white">{item.title}</div>
                    <div className="d-flex align-items-center " >
                      <span className="text-info me-2">{item.price}</span>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))
              )}
              <div className="mt-2">
                <Link to="/cart" className="btn btn-primary w-100">
                  Go to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
           <DropdownSidebar />
      </div>
    </nav>
  );
};

export default Navbar;
