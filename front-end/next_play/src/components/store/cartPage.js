import React, { useState, useEffect } from "react";
import "../../css/home/homePageStyle.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage or API
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    // For demo purposes, using sample data
    // In real app, this would come from localStorage or API
    const sampleCartItems = [
      {
        id: 1,
        title: "Cyberpunk 2077",
        imageUrl: "https://via.placeholder.com/80x60",
        price: 59.99,
        quantity: 1,
        genres: ["Action", "RPG"],
        description: "An open-world, action-adventure story set in Night City"
      },
      {
        id: 2,
        title: "The Witcher 3",
        imageUrl: "https://via.placeholder.com/80x60",
        price: 39.99,
        quantity: 2,
        genres: ["RPG", "Adventure"],
        description: "A story-driven open world RPG set in a visually stunning fantasy universe"
      },
      {
        id: 3,
        title: "Red Dead Redemption 2",
        imageUrl: "https://via.placeholder.com/80x60",
        price: 49.99,
        quantity: 1,
        genres: ["Action", "Adventure"],
        description: "An epic tale of life in America's unforgiving heartland"
      }
    ];
    setCartItems(sampleCartItems);
  };

  const removeFromCart = (gameId) => {
    setCartItems(cartItems.filter(item => item.id !== gameId));
  };

  const updateQuantity = (gameId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(gameId);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === gameId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

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
            Shopping Cart
          </h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center" style={{ padding: "60px 0" }}>
            <h4 style={{ color: "#6c757d" }}>Your cart is empty</h4>
            <p style={{ color: "#6c757d" }}>Add some games to get started!</p>
          </div>
        ) : (
          <>
            {/* Cart Table */}
            <div
              style={{
                background: "#1e293b",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "30px"
              }}
            >
              <div className="table-responsive">
                <table className="table table-dark mb-0">
                  <thead style={{ background: "#0f172a" }}>
                    <tr>
                      <th style={{ border: "none", padding: "20px" }}>Game</th>
                      <th style={{ border: "none", padding: "20px" }}>Description</th>
                      <th style={{ border: "none", padding: "20px", textAlign: "center" }}>Quantity</th>
                      <th style={{ border: "none", padding: "20px", textAlign: "center" }}>Price</th>
                      <th style={{ border: "none", padding: "20px", textAlign: "center" }}>Total</th>
                      <th style={{ border: "none", padding: "20px", textAlign: "center" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} style={{ borderBottom: "1px solid #334155" }}>
                        <td style={{ border: "none", padding: "20px" }}>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.imageUrl || "https://via.placeholder.com/80x60"}
                              alt={item.title}
                              style={{
                                width: "80px",
                                height: "60px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginRight: "15px"
                              }}
                            />
                            <div>
                              <h6 className="fw-bold mb-1">{item.title}</h6>
                              <span
                                style={{
                                  background: "#0dcaf0",
                                  color: "#000",
                                  padding: "2px 6px",
                                  borderRadius: "4px",
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                }}
                              >
                                {item.genres?.join(" | ")}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td style={{ border: "none", padding: "20px" }}>
                          <p style={{ margin: 0, fontSize: "0.9rem", color: "#cbd5e1" }}>
                            {item.description?.substring(0, 80)}...
                          </p>
                        </td>
                        <td style={{ border: "none", padding: "20px", textAlign: "center" }}>
                          <div className="d-flex align-items-center justify-content-center">
                            <button
                              className="btn btn-sm"
                              style={{
                                background: "#334155",
                                color: "#fff",
                                border: "1px solid #0dcaf0",
                                width: "30px",
                                height: "30px",
                                borderRadius: "4px"
                              }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span
                              style={{
                                margin: "0 15px",
                                fontWeight: "bold",
                                minWidth: "20px",
                                textAlign: "center"
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              className="btn btn-sm"
                              style={{
                                background: "#334155",
                                color: "#fff",
                                border: "1px solid #0dcaf0",
                                width: "30px",
                                height: "30px",
                                borderRadius: "4px"
                              }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td style={{ border: "none", padding: "20px", textAlign: "center" }}>
                          <span className="fw-bold" style={{ color: "#0dcaf0" }}>
                            ${item.price}
                          </span>
                        </td>
                        <td style={{ border: "none", padding: "20px", textAlign: "center" }}>
                          <span className="fw-bold" style={{ color: "#0dcaf0" }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </td>
                        <td style={{ border: "none", padding: "20px", textAlign: "center" }}>
                          <button
                            className="btn btn-sm"
                            style={{
                              background: "#dc3545",
                              color: "#fff",
                              border: "none",
                              borderRadius: "6px",
                              padding: "6px 12px",
                              transition: "0.3s"
                            }}
                            onClick={() => removeFromCart(item.id)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#c82333";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "#dc3545";
                            }}
                          >
                            <i className="fas fa-trash"></i> Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="row justify-content-end">
              <div className="col-md-4">
                <div
                  style={{
                    background: "#1e293b",
                    borderRadius: "12px",
                    padding: "30px",
                    border: "1px solid #334155"
                  }}
                >
                  <h5 className="fw-bold mb-3" style={{ color: "#0dcaf0" }}>
                    Order Summary
                  </h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span className="fw-bold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax:</span>
                    <span className="fw-bold">${(getTotalPrice() * 0.1).toFixed(2)}</span>
                  </div>
                  <hr style={{ borderColor: "#334155" }} />
                  <div className="d-flex justify-content-between mb-4">
                    <span className="fw-bold fs-5">Total:</span>
                    <span className="fw-bold fs-5" style={{ color: "#0dcaf0" }}>
                      ${(getTotalPrice() * 1.1).toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="btn w-100"
                    style={{
                      background: "#0dcaf0",
                      color: "#0f172a",
                      border: "none",
                      padding: "12px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      transition: "0.3s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#0bb5d1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0dcaf0";
                    }}
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    className="btn w-100 mt-2"
                    style={{
                      background: "transparent",
                      color: "#0dcaf0",
                      border: "1px solid #0dcaf0",
                      padding: "12px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      transition: "0.3s"
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
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
