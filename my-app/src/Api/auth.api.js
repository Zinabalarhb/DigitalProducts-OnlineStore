import api from "./axiosInstance";

export const register       = (body) => api.post("/auth/register", body);
export const login          = (body) => api.post("/auth/login", body);
export const logout         = ()     => api.post("/auth/logout");
export const getMe          = ()     => api.get("/auth/me");
export const refreshToken   = ()     => api.post("/auth/refresh");
export const forgotPassword = (body) => api.post("/auth/forgot-password", body);
export const resetPassword  = (body) => api.post("/auth/reset-password", body);
