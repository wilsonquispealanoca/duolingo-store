import { component$, useStyles$, useContext } from "@builder.io/qwik";
import styles from "./button.css?inline";
import { GlobalContext, Product } from "~/root";

interface Props {
  product: Product;
  title?: string;
}

export default component$(({ product, title }: Props) => {
  const cartState = useContext(GlobalContext);
  useStyles$(styles);
  return (
    <button
      class="btn btn-primary"
      onClick$={() => {
        cartState.cart.push({
          item: product,
          quantity: 1,
        });
      }}
    >
      {title}
    </button>
  );
});
