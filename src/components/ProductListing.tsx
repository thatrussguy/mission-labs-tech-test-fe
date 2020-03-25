import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import ListingItem from "./ListingItem";
import { fetchProducts } from "../queries/products";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { products }
      } = await fetchProducts();
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
