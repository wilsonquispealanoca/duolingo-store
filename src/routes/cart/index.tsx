import { component$, useContext, useStyles$ } from "@builder.io/qwik";
import { GlobalContext } from "~/root";
import styles from "./app.css?inline";
import { Link } from "@builder.io/qwik-city";
import ItemCart from "~/components/itemCart";

export default component$(() => {
  const cartState = useContext(GlobalContext);

  useStyles$(styles);
  return (
    <div class="container">
      <div class="cart-center">
        <h1 class="title-cart a-selft">your cart</h1>
        <div class="p-cart a-selft">
          {cartState.cart.length > 0 ? (
            <div>
              <p>Items in your cart : {cartState.cart.length}</p>
              <ItemCart />
              <Link href="/">
                <button class="btn-cart">Continue shopping</button>
              </Link>
            </div>
          ) : (
            <div>
              <p>Your cart is currently empty</p>
              <Link href="/">
                <button class="btn-cart">Continue shopping</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
