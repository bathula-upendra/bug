// import React, { useContext } from "react";
// import NavLink from "./NavLink";
// import { useLocation } from "react-router-dom";
// import { CartContext } from "./cartcontent";

// const Header = () => {
//   const { pathname } = useLocation();
//   const { cartItems } = useContext(CartContext);

//   return (
//     <header
//       style={{
//         width: "100%",
//         padding: "10px 15px",
//         backgroundColor: "#3d92e7",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center"
//       }}
//     >
//       <nav style={{ display: "flex", justifyContent: "flex-start", gap: "12px" }}>
//         <NavLink name="home" label="Home" link="/" isactive={pathname === "/" ? true : false} />
//         <NavLink name="cart" label="Cart" link="/cart" isactive={pathname === "/cart" ? true : false} />
//       </nav>
//       <div style={{ color: "white" }}>
//         Cart Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useContext } from "react"; // Add useContext
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/cartcontent.jsx"; // Fixed path

const Header = () => {
  const { pathname } = useLocation();
  const { cartItems } = useContext(CartContext); // Use CartContext
  return (
    <header
      style={{
        width: "100%",
        padding: "10px 15px",
        backgroundColor: "#3d92e7",
      }}
    >
      <nav
        style={{ display: "flex", justifyContent: "flex-start", gap: "12px" }}
      >
        <NavLink name="home" label="Home" link="/" isactive={pathname === "/" ? true : false} />
        <NavLink name="cart" label="Cart" link="/cart" isactive={pathname === "/cart" ? true : false} />
        <span>Cart Items: {cartItems.length}</span> {/* Display cart item count */}
      </nav>
    </header>
  );
};

export default Header;