import api from "./axiosInstance";

export const getCategories        = ()               => api.get("/categories");
export const getCategoryProducts  = (id, params = {})=> api.get(`/categories/${id}/products`, { params });
