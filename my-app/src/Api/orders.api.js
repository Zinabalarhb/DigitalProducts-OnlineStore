import api from "./axiosInstance";

export const createOrder  = (body)           => api.post("/orders", body);
export const getMyOrders  = (params = {})    => api.get("/orders", { params });
export const getOrderById = (id)             => api.get(`/orders/${id}`);
export const getOrderCode = (id)             => api.get(`/orders/${id}/code`);
