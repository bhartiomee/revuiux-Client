import React from "react";
import "./ProductDetailsInput.css";

const ProductDetailsInput = (params) => {
  return (
    <div className="input-wrapper-product">
      <label className="default-input-product">{params.labelText} </label>
      <input
        type={params.type}
        className="default-input-product" //{"default-input" + params.className}
      ></input>
    </div>
  );
};

export default ProductDetailsInput;
