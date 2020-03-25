import React from "react";
import { Product } from "../types/product";

const ListingItem = ({
  product: { product_id, category, name, price, sizes }
}: {
  product: Product;
}) => {
  return (
    <div className="listing-item">
      <span>{product_id}</span>
      <span>{name}</span>
      <span>{category}</span>
      <span>{sizes}</span>
      <span>{price}</span>
    </div>
  );
};

export default ListingItem;
