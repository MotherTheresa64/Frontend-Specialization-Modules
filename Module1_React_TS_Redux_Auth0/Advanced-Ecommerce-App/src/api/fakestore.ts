import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
};

export const fetchCategories = async () => {
  const res = await axios.get(`${API_URL}/products/categories`);
  return res.data;
};

export const fetchProductsByCategory = async (category: string) => {
  const res = await axios.get(`${API_URL}/products/category/${category}`);
  return res.data;
};
