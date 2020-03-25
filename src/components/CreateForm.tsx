import React, { Dispatch, SetStateAction, useState } from "react";
import { createProduct } from "../queries/products";
import { Product } from "../types/product";

const CreateForm = ({
  setProducts
}: {
  setProducts: Dispatch<SetStateAction<any>>;
}) => {
  const createNewProduct = () => {
    const newProduct = {
      name,
      category,
      sizes,
      price: Number(price)
    };
    setShowForm(false);
    createProduct(newProduct).then(({ data }) => {
      setProducts((prevProducts: Product[]) => [...prevProducts, data]);
    });
  };

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState("");
  const [price, setPrice] = useState("");
  return (
    <>
      <button onClick={() => setShowForm(true)}>Add Product?</button>
      {showForm && (
        <div className="form">
          <input
            onChange={({ target: { value } }) => {
              setName(value);
            }}
            placeholder="Name"
            value={name}
          ></input>
          <input
            onChange={({ target: { value } }) => {
              setCategory(value);
            }}
            placeholder="Category"
            value={category}
          ></input>
          <input
            onChange={({ target: { value } }) => {
              setSizes(value);
            }}
            placeholder="Sizes"
            value={sizes}
          ></input>
          <input
            onChange={({ target: { value } }) => {
              setPrice(value);
            }}
            placeholder="Price"
            value={price}
          ></input>
          <button onClick={createNewProduct}>Save</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default CreateForm;
