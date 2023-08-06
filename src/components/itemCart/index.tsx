import { useStyles$, component$, useContext } from "@builder.io/qwik";
import styles from "../modal/app.css?inline";
import { GlobalContext } from "~/root";
import { Image } from "@unpic/qwik";
import Quantitybtn from "../quantity-btn/quantitybtn";

export default component$(() => {
  const cartState = useContext(GlobalContext);
  useStyles$(styles);
  return (
    <>
      {cartState.cart.map((cartItem, index) => (
        <li key={index}>
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
                <button
                  class="btn-trash"
                  onClick$={() => {
                    const itemIdToDelete = cartItem.item.id;
                    const indexToDelete = cartState.cart.findIndex(
                      (cartItem) => cartItem.item.id === itemIdToDelete
                    );

                    if (indexToDelete !== -1) {
                      const updatedCart = [
                        ...cartState.cart.slice(0, indexToDelete),
                        ...cartState.cart.slice(indexToDelete + 1),
                      ];

                      cartState.cart = updatedCart;
                    }
                  }}
                >
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
        </li>
      ))}
    </>
  );
});
