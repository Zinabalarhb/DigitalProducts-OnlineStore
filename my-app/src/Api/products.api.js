import api from "./axiosInstance";

export const getProducts       = (params = {})  => api.get("/products", { params });
export const getProductById    = (id)            => api.get(`/products/${id}`);
export const getFeaturedProducts = ()            => api.get("/products/featured");
export const getBestsellers    = (limit = 8)     => api.get("/products/bestsellers", { params: { limit } });
export const searchProducts    = (q, params = {})=> api.get("/products/search", { params: { q, ...params } });
