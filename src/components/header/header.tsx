import styles from "./header.css?inline";
import { component$, useStyles$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  useStyles$(styles);
  const count = useSignal(0);
  return (
    <header class="container">
      <div class="flex">
        <div class="flex wrapper-quantity">
          <button
            type="button"
            class="quantity-btn minus btn"
            onClick$={() => count.value--}
          >
            {" "}
            -{" "}
          </button>
          <input
            type="text"
            name="quantity"
            value={count.value}
            data-min-qty="1"
            class="input-form"
          />
          <button
            type="button"
            class="quantity-btn plus btn"
            onClick$={() => count.value++}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <button class="btn btn-primary">Add to cart</button>
      </div>
    </header>
  );
});
