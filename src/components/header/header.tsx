import styles from "./header.css?inline";
import { component$, useStyles$, useContext } from "@builder.io/qwik";
import { CartInformationContext } from "~/root";

export default component$(() => {
  const stateCart: any = useContext(CartInformationContext);

  useStyles$(styles);
  return (
    <nav>
      <div class="nav-container">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#58cc02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </a>
        <a href="/">
          <h1 class="title">Duolingo store</h1>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#58cc02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>
        <a href="" class="nav-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#58cc02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="10" cy="20.5" r="1"></circle>
            <circle cx="18" cy="20.5" r="1"></circle>
            <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
          </svg>
          {stateCart.cart.length > 0 ? (
            <span class="quantity-cart">{stateCart.cart.length}</span>
          ) : null}
        </a>
      </div>
    </nav>
  );
});
