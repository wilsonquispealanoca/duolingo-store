import { component$, useStyles$, QRL } from "@builder.io/qwik";
import styles from "./app.css?inline";

interface ProductButtonTertiaryProps {
  onClick$?: QRL<() => void>;
}

export default component$<ProductButtonTertiaryProps>((props) => {
  useStyles$(styles);
  return (
    <button class="btn-product-home" onClick$={props.onClick$}>
      Add to cart
    </button>
  );
});
