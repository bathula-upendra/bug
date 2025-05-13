import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CartProvider } from "./components/context/cartContext"; 

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;