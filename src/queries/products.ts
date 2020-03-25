import axios from "axios";
import { Product } from "../types/product";

const { REACT_APP_API_URL = "", REACT_APP_AUTH_KEY } = process.env;

const fetchProducts = async () => {
  return await axios(REACT_APP_API_URL);
};

const deleteProductById = async (product_id: number) => {
  return await axios.delete(`${REACT_APP_API_URL}/${product_id}`, {
    headers: { "X-Token": REACT_APP_AUTH_KEY }
  });
};

const updateProductById = async (updatedProduct: Product) => {
  return await axios.patch(
    `${REACT_APP_API_URL}/${updatedProduct.product_id}`,
    updatedProduct,
    {
      headers: { "X-Token": REACT_APP_AUTH_KEY }
    }
  );
};

export { fetchProducts, deleteProductById, updateProductById };
