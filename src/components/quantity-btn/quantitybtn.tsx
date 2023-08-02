// import { CartContext } from "../cartStore/cartStore";
import styles from "./quantitybtn.css?inline";
import {
  component$,
  useStyles$,
  useSignal,
  useContext,
} from "@builder.io/qwik";
import { CartInformationContext } from "~/root";

export default component$(() => {
  const stateCart: any = useContext(CartInformationContext);
  useStyles$(styles);
  const count = useSignal(0);

  return (
    <>
      <div class="flex wrapper-quantity">
        <button
          type="button"
          class="quantity-btn minus"
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
          class="quantity-btn plus"
          onClick$={() => count.value++}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </>
  );
});
