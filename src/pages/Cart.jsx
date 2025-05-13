import React, { useContext } from "react";
import { CartContext } from "../components/context/cartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;