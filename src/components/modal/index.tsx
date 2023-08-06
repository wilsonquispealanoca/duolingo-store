import { useStyles$, component$, type PropFunction } from "@builder.io/qwik";
import styles from "./app.css?inline";
import { Image } from "@unpic/qwik";
import Quantitybtn from "../quantity-btn/quantitybtn";
import { Link } from "@builder.io/qwik-city";
import { useContext } from "@builder.io/qwik";
import { GlobalContext } from "~/root";
import ItemCart from "../itemCart";
interface CartProps {
  onClose$: PropFunction<() => void>;
}

export default component$((props: CartProps) => {
  useStyles$(styles);
  const cartState = useContext(GlobalContext);
  return (
    <div class="modal-container">
      <div class="container-title">
        <h2 class="modal-title">your cart</h2>
        <button class="btn-close" onClick$={props.onClose$}>
          &times;
        </button>
      </div>
      <div class="modal-image-scroll">
        <div class="modal-alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="me-3 flex-shrink-0"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <div>Item added to your cart</div>
        </div>
        <ItemCart />
        <div class="modal-total">
          <p class="modal-subtotal">
            Subtotal:{" "}
            <b>
              $
              {cartState.cart
                .map((i) => i.item.price)
                .reduce((prev, curr) => prev + curr, 0)}
            </b>
          </p>
          {cartState.cart.length > 0 && (
            <>
              <p class="modal-shipping">
                Taxes & shipping calculated at checkout
              </p>
              <div class="container-btn">
                <button class="btn-checkout">Checkout</button>
              </div>
            </>
          )}
          <Link onClick$={props.onClose$} href="/cart">
            <p class="modal-view-cart">View cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
});
