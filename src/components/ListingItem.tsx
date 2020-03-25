import React, { useState, Dispatch, SetStateAction } from "react";
import { Product } from "../types/product";
import "./ListingItem.css";
import { deleteProductById } from "../queries/products";
import EditForm from "./EditForm";

const ListingItem = ({
  product: { product_id, category, name, price, sizes },
  setProducts
}: {
  product: Product;
  setProducts: Dispatch<SetStateAction<any>>;
}) => {
  const [showForm, setShowForm] = useState(false);

  const deleteProduct = () => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.filter(
        (product: Product) => product.product_id !== product_id
      )
    );
    deleteProductById(product_id);
  };

  return (
    <>
      <div className="listing-item">
        <span>{product_id}</span>
        <span>{name}</span>
        <span>{category}</span>
        <span>{sizes}</span>
        <span>{price}</span>
        <button onClick={() => setShowForm(true)}>Edit</button>
        <button onClick={deleteProduct}>Delete</button>
      </div>
      {showForm && (
        <EditForm
          product={{ product_id, name, category, sizes, price }}
          setProducts={setProducts}
          setShowForm={setShowForm}
        />
      )}
    </>
  );
};

export default ListingItem;
