import api from "./axiosInstance";

export const getProductReviews = (productId, params = {}) =>
  api.get(`/products/${productId}/reviews`, { params });
export const addReview    = (productId, body) => api.post(`/products/${productId}/reviews`, body);
export const deleteReview = (id)              => api.delete(`/reviews/${id}`);
