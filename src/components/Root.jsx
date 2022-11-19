import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from "react";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
  const [cart, setCart] = useState([]);
  const products = useLoaderData();
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Root;
