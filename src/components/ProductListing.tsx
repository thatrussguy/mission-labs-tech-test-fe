import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import ListingItem from "./ListingItem";

const { REACT_APP_API_URL = "" } = process.env;

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { products }
      } = await axios(REACT_APP_API_URL);
      setProducts(products);
    };

    fetchData();
  }, []);

  return products.length ? (
    <>
      {products.map((product: Product) => (
        <ListingItem key={product.product_id} product={product} />
      ))}
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductListing;
