import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  if (loader) {
    return <h3>Loading...</h3>;
  }
  
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => {
        //const { id, image, title, price } = product;
        return (
          <ProductCard key={product.id} {...product} />
        );
      })}
    </div>
  );
};

export default Products;
