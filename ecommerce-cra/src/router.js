import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/products/ProductDetails";
import { productLoader } from "./components/products/loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: productLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  }
]);
