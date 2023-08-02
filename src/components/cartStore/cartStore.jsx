import { createContextId, useSignal } from "@builder.io/qwik";

export const CartContext = createContextId("cart.context");

export const cartCount = useSignal(0);
useContextProvider(CartContext, cartCount);

export const addToCart = () => {
  cartCount.value += 1;
};

export const removeFromCart = () => {
  if (cartCount.value > 0) {
    cartCount.value -= 1;
  }
};
