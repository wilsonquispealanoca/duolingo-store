import { useStyles$, component$, type PropFunction } from "@builder.io/qwik";
import styles from "./app.css?inline";
import { Image } from "@unpic/qwik";
import Quantitybtn from "../quantity-btn/quantitybtn";
import { useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { GlobalContext } from "~/root";
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
      {cartState.cart.map((cartItem, index) => (
        <li key={index}>
          <div>
            <div class="modal-image">
              <figure class="flex-33">
                <Image
                  src={cartItem.item.image}
                  layout="constrained"
                  width={222}
                  height={222}
                  alt="A lovely bath"
                  class="modal-image-fluid"
                />
              </figure>
              <div class="flex-66">
                <h3 class="modal-title-product">{cartItem.item.title}</h3>
                <p class="modal-price">${cartItem.item.price}</p>
                <div class="flex">
                  <Quantitybtn />
                  <button class="btn-trash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-60"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="modal-total">
              <p class="modal-subtotal">
                Subtotal: <b>$71.90</b>
              </p>
              <p class="modal-shippig">
                Taxes & shipping calculated at checkout
              </p>
              <div class="container-btn">
                <button class="btn-checkout">Checkout</button>
              </div>
              <Link onClick$={props.onClose$} href="/cart">
                <p class="modal-view-cart">View cart</p>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
});
