import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import { getProductsAndCartData } from "../loaders/getProducts&CartData";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getProductsAndCartData,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
