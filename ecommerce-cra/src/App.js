// import { RouterProvider } from "react-router-dom";
// import { router } from "./router";


// function App() {
//   return (
//     <RouterProvider router={router}></RouterProvider>
//   );
// }

// export default App;


import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CartProvider } from "./components/context/cartcontent.jsx"; // Fixed path

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;