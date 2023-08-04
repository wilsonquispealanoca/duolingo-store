import { component$, useContext, useStyles$ } from "@builder.io/qwik";
import { GlobalContext } from "~/root";
import styles from "./app.css?inline";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const cartState = useContext(GlobalContext);

  useStyles$(styles);
  return (
    <div class="container">
      <div class="cart-center">
        <h1 class="title-cart a-selft">your cart</h1>
        <div class="p-cart a-selft">
          {cartState.cart.length > 0 ? (
            <p>Items in your cart : {cartState.cart.length}</p>
          ) : (
            <div>
              <p>Your cart is currently empty</p>
              <Link href="/">
                <button class="btn-cart">Continue shopping</button>
              </Link>
            </div>
          )}
        </div>
        {cartState.cart.map((cartItem, index) => (
          <li key={index}>
            <h2>{cartItem.item.title}</h2>
            <p>{cartItem.item.price}</p>
          </li>
        ))}
      </div>
    </div>
  );
});
