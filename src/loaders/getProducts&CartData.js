import { getStoredCart } from "../utils/fakeDB";

export const getProductsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const saveCart = getStoredCart();
  const initialCart = [];
  for (const id in saveCart) {
    const foundedProduct = products.find((product) => product.id === id);
    if (foundedProduct) {
      const quantity = saveCart[id];
      foundedProduct.quantity = quantity;
      initialCart.push(foundedProduct);
    }
  }

  return { products, initialCart };
};
