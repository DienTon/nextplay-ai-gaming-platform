import React, { createContext, useContext, useState, useEffect } from 'react';
import cartService from '../service/store/cartService';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart items khi component mount
  useEffect(() => {
    loadCartItems();
  }, []);

  // Update cart count khi cartItems thay đổi
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const loadCartItems = async () => {
    try {
      const items = await cartService.getAllCartItems();
      setCartItems(items);
    } catch (error) {
      console.error('Error loading cart items:', error);
      setCartItems([]);
    }
  };

  const addToCart = async (cartData) => {
    try {
      await cartService.addToCart(cartData);
      // Reload cart items để cập nhật state
      await loadCartItems();
      return true;
    } catch (error) {
      console.error('Error adding to cart:', error);
      return false;
    }
  };

  const removeFromCart = async (gameId) => {
    try {
      await cartService.removeFromCart(gameId);
      // Reload cart items để cập nhật state
      await loadCartItems();
      return true;
    } catch (error) {
      console.error('Error removing from cart:', error);
      return false;
    }
  };

  const updateCartQuantity = async (gameId, quantity) => {
    try {
      await cartService.updateQuantity(gameId, quantity);
      // Reload cart items để cập nhật state
      await loadCartItems();
      return true;
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      return false;
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    loadCartItems,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
