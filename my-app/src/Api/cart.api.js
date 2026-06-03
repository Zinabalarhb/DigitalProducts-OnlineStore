import api from "./axiosInstance";

export const getCart        = ()              => api.get("/cart");
export const addToCart      = (body)          => api.post("/cart/items", body);
export const updateCartItem = (itemId, body)  => api.patch(`/cart/items/${itemId}`, body);
export const removeCartItem = (itemId)        => api.delete(`/cart/items/${itemId}`);
export const clearCart      = ()              => api.delete("/cart");
