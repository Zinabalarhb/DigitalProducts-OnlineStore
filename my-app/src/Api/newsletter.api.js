import api from "./axiosInstance";

export const subscribe   = (body) => api.post("/newsletter/subscribe", body);
export const unsubscribe = (body) => api.post("/newsletter/unsubscribe", body);
