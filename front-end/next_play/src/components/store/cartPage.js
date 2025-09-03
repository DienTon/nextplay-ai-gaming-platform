import React, { useState, useEffect ,Alert} from "react";
import "../../css/home/homePageStyle.css";
import CartService from "../../service/store/cartService";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    // Load cart items from localStorage or API
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const items = await CartService.getAllCartItems();
      setCartItems(items);
    } catch (error) {
      console.error("Error loading cart items:", error);
    }
  };

  const removeFromCart = (gameId) => {
    CartService.removeFromCart(gameId);
    setCartItems(cartItems.filter(item => item.id !== gameId));
    setShowDeleteModal(false);
    setItemToDelete(null);
    alert("Item removed from cart" );
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
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
    return cartItems.reduce((total, item) => total + (item.game.price * item.quantity), 0);
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
                              src={item.game.imageUrl || "https://via.placeholder.com/80x60"}
                              alt={item.game.title}
                              style={{
                                width: "80px",
                                height: "60px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginRight: "15px"
                              }}
                            />
                            <div>
                              <h6 className="fw-bold mb-1">{item.game.title}</h6>
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
                                {item.game.gameGenres.map((g) => g.genre.name).join(" | ")}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td style={{ border: "none", padding: "20px" }}>
                          <p style={{ margin: 0, fontSize: "0.9rem", color: "#cbd5e1" }}>
                            {item.game.description?.substring(0, 80)}...
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
                            ${item.game.price}
                          </span>
                        </td>
                        <td style={{ border: "none", padding: "20px", textAlign: "center" }}>
                          <span className="fw-bold" style={{ color: "#0dcaf0" }}>
                            ${(item.game.price * item.quantity).toFixed(2)}
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
                            onClick={() => handleDeleteClick(item)}
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050
          }}
          onClick={handleCancelDelete}
        >
          <div
            style={{
              background: "#1e293b",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "400px",
              width: "90%",
              border: "1px solid #334155"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div
                style={{
                  fontSize: "3rem",
                  color: "#dc3545",
                  marginBottom: "20px"
                }}
              >
                🗑️
              </div>
              <h4 style={{ color: "#fff", marginBottom: "15px" }}>
                Xác nhận xóa
              </h4>
              <p style={{ color: "#cbd5e1", marginBottom: "20px" }}>
                Bạn có chắc chắn muốn xóa "{itemToDelete?.game?.title}" khỏi giỏ hàng?
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button
                  className="btn"
                  style={{
                    background: "transparent",
                    color: "#6c757d",
                    border: "1px solid #6c757d",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    transition: "0.3s"
                  }}
                  onClick={handleCancelDelete}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#6c757d";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#6c757d";
                  }}
                >
                  Hủy
                </button>
                <button
                  className="btn"
                  style={{
                    background: "#dc3545",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    transition: "0.3s"
                  }}
                  onClick={() => removeFromCart(itemToDelete.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#c82333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#dc3545";
                  }}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
