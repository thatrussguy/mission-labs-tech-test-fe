import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import ListingItem from "./ListingItem";
import { fetchProducts } from "../queries/products";
import CreateForm from "./CreateForm";

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
      <CreateForm setProducts={setProducts} />
      {products
        .sort((a, b) => a["product_id"] - b["product_id"])
        .map((product: Product) => (
          <ListingItem
            key={product.product_id}
            product={product}
            setProducts={setProducts}
          />
        ))}
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductListing;
