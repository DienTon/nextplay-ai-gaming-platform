import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import DropdownSidebar from "../layout/sidebar";
import "../css/home/homePageStyle.css";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, cartCount, removeFromCart, loadCartItems } = useCart();
  const location = useLocation();

  // Lấy thông tin user từ localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");
  
  // Kiểm tra user đã đăng nhập chưa
  const isLoggedIn = !!token;
  
  // Kiểm tra có phải đang ở trang cart không
  const isCartPage = location.pathname === '/cart';

  useEffect(() => {
    if (isLoggedIn) {
      loadCartItems();
    }
  }, []);

  const navigate = useNavigate();

  const toggleCart = () => setCartOpen(!cartOpen);

  const handleRemoveItem = async (id) => {
    await removeFromCart(id);
  };
  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  const handleLogout = () => {
    // Xóa thông tin user
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    
    // Chuyển về trang chủ
    navigate("/");
    window.location.reload(); // Reload để cập nhật navbar
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
        {!isCartPage && (
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
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cartCount}
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
                      <div className="text-white">{item.game.title}</div>
                      <div className="d-flex align-items-center ">
                        <span className="text-info me-2">{item.game.price}</span> 
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRemoveItem(item.id)}
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
        )}
        
        <div className="position-relative">
          {!isLoggedIn ? (
            // Hiển thị nút Login nếu chưa đăng nhập
            <button
              className="btn position-relative"
              onClick={handleLoginClick}
              style={{
                marginLeft: "10px",
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
              <FontAwesomeIcon icon={faRightToBracket} />
            </button>
          ) : (
            <DropdownSidebar onLogout={handleLogout} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
