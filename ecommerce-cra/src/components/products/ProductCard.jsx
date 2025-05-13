import React from "react";

const ProductCard = (props) => {
const { id,image, title, price } = props;
  return (
    <div
      style={{
        border: "1px solid rgb(129, 129, 129)",
        padding: "16px",
        width: "calc(20% - 20px)",
        textAlign: 'center'
      }}
    >
      <a href={`/products/${id}`}>
        <div>
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100px", objectFit: "contain" }}
          />
        </div>
        <h4>{title}</h4>
        <p>{price}</p>
      </a>
    </div>
  );
};

export default ProductCard;
