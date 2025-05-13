import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { name, label, link, isactive } = props;
  return (
    <Link
      name={name}
      to={link}
      style={{ textDecoration: "none", color: "#ffffff", textDecoration: isactive ? 'underline': 'none' }}
    >
      {label}
    </Link>
  );
};

export default NavLink;
