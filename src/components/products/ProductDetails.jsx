import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const ProductDetails = () => {
  const product = useLoaderData();
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: '20px 0px' }}>
      <div style={{ width: "35%" }}>
        <div>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: '200px', objectFit: 'contain' }}
          />
        </div>
      </div>
      <div style={{ width: "65%" }}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button
          onClick={handleAddToCart}
          style={{
            padding: "10px 20px",
            backgroundColor: "#3d92e7",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;