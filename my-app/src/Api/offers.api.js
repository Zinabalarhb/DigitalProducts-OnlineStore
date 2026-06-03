import api from "./axiosInstance";

export const getOffers       = ()    => api.get("/offers");
export const getActiveOffers = ()    => api.get("/offers/active");
export const getOfferById    = (id)  => api.get(`/offers/${id}`);
