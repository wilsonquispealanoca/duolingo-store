import { component$, useContext, useStyles$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import { GlobalContext, Product } from "~/root";

interface Props {
  product: Product;
}

export default component$(({ product }: Props) => {
  const cartState = useContext(GlobalContext);
  useStyles$(styles);

  return (
    <button
      class="btn-product-home"
      onClick$={() => {
        cartState.cart.unshift({
          item: product,
          quantity: 1,
        });
      }}
    >
      Add to cart
    </button>
  );
});
