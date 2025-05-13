import React from "react";
import { useNavigate } from "react-router-dom";
import Products from "../components/products/Products";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Products</h1>
      <Products />
    </div>
  );
};

export default Home;
