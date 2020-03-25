import axios from "axios";

const { REACT_APP_API_URL = "", REACT_APP_AUTH_KEY } = process.env;

const fetchProducts = async () => {
  return await axios(REACT_APP_API_URL);
};

const deleteProductById = async (product_id: number) => {
  return await axios.delete(`${REACT_APP_API_URL}/${product_id}`, {
    headers: { "X-Token": REACT_APP_AUTH_KEY }
  });
};

export { fetchProducts, deleteProductById };
