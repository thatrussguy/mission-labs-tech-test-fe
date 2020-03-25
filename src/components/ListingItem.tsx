import React from "react";
import { Product } from "../types/product";
import "./ListingItem.css";
import { deleteProductById } from "../queries/products";

const ListingItem = ({
  product: { product_id, category, name, price, sizes },
  setProducts
}: {
  product: Product;
  setProducts: any;
}) => {
  const deleteProduct = () => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.filter(
        (product: Product) => product.product_id !== product_id
      )
    );
    deleteProductById(product_id);
  };

  return (
    <div className="listing-item">
      <span>{product_id}</span>
      <span>{name}</span>
      <span>{category}</span>
      <span>{sizes}</span>
      <span>{price}</span>
      <button>Edit</button>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default ListingItem;
