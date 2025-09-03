import apiClient from "../../utils/apiClient";

export const getAllCartItems = async () => {
  try {
    const response = await apiClient.get("/api/page/cart/");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching cart items");
  }
};

export const addToCart = async (item) => {
  try {
    const response = await apiClient.post("/api/page/cart/", item);
    return response.data;
  } catch (error) {
    throw new Error("Error adding item to cart");
  }
};

export const removeFromCart = async (itemId) => {
  try {
    const response = await apiClient.delete(`/api/page/cart/?id=${itemId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error removing item from cart");
  }
};

export default {
  getAllCartItems,
  addToCart,
  removeFromCart
};
