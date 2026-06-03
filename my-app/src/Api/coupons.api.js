import api from "./axiosInstance";

export const validateCoupon = (body) => api.post("/coupons/validate", body);
