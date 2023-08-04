import { component$, useContext } from "@builder.io/qwik";
import { GlobalContext } from "~/root";

export default component$(() => {
  const cartState = useContext(GlobalContext);
  return (
    <>
      <h1>Your cart</h1>
      {cartState.cart.length > 0 && (
        <p>Items in your cart : {cartState.cart.length}</p>
      )}
      {cartState.cart.map((cartItem, index) => (
        <div>
          <h2>{cartItem.item.title}</h2>
          <p>{cartItem.item.price}</p>
        </div>
      ))}
    </>
  );
});
