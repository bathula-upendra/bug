import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const a = useLocation();
  console.log("Use Loaction ::", a);

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
