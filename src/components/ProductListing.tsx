import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import ListingItem from "./ListingItem";
import { fetchProducts } from "../queries/products";
import CreateForm from "./CreateForm";
import "./ProductListing.css";

const ProductListing = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const {
        data: { products }
      } = await fetchProducts({ priceFrom, priceTo });
      setProducts(products);
      setLoading(false);
    };

    fetchData();
  }, [priceFrom, priceTo]);

  return (
    <>
      <CreateForm setProducts={setProducts} />
      <div>
        <span>Filter by price:</span>
        <input
          onChange={({ target: { value } }) => {
            setPriceFrom(value);
          }}
          placeholder="priceFrom"
          value={priceFrom}
        ></input>
        <input
          onChange={({ target: { value } }) => {
            setPriceTo(value);
          }}
          placeholder="priceTo"
          value={priceTo}
        ></input>
      </div>
      {products.length ? (
        products
          .sort((a, b) => a["product_id"] - b["product_id"])
          .map((product: Product) => (
            <ListingItem
              key={product.product_id}
              product={product}
              setProducts={setProducts}
            />
          ))
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>No Products Found</p>
      )}
    </>
  );
};

export default ProductListing;
