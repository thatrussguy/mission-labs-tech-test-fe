import React, { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../types/product";
import { updateProductById } from "../queries/products";

const EditForm = ({
  product,
  setProducts,
  setShowForm
}: {
  product: Product;
  setProducts: Dispatch<SetStateAction<any>>;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) => {
  const updateProduct = () => {
    const updatedProduct = {
      name: updatedName,
      category: updatedCategory,
      sizes: updatedSizes,
      price: updatedPrice,
      product_id
    };
    setProducts((prevProducts: Product[]) => [
      ...prevProducts.filter(
        (product: Product) => product.product_id !== product_id
      ),
      updatedProduct
    ]);
    setShowForm(false);
    updateProductById(updatedProduct);
  };

  const { name, category, sizes, price, product_id } = product;

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedCategory, setUpdatedCategory] = useState(category);
  const [updatedSizes, setUpdatedSizes] = useState(sizes);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  return (
    <>
      <input
        onChange={({ target: { value } }) => {
          setUpdatedName(value);
        }}
        value={updatedName}
      ></input>
      <input
        onChange={({ target: { value } }) => {
          setUpdatedCategory(value);
        }}
        value={updatedCategory}
      ></input>
      <input
        onChange={({ target: { value } }) => {
          setUpdatedSizes(value);
        }}
        value={updatedSizes}
      ></input>
      <input
        onChange={({ target: { value } }) => {
          setUpdatedPrice(Number(value));
        }}
        value={updatedPrice}
      ></input>
      <button onClick={updateProduct}>Save</button>
      <button onClick={() => setShowForm(false)}>Cancel</button>
    </>
  );
};

export default EditForm;
