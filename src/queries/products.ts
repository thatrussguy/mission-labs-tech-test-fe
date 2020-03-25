import axios from "axios";

const { REACT_APP_API_URL = "" } = process.env;

const fetchProducts = async () => {
  return await axios(REACT_APP_API_URL);
};

export { fetchProducts };
