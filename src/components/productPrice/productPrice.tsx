import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./productPrice.css?inline";

interface ProductPriceProps {
  title: string;
  price: number;
}

export default component$<ProductPriceProps>(({ title, price }) => {
  useStyles$(styles);
  return (
    <>
      <h1 class="price-title">{title}</h1>
      <p class="price">${price}</p>
    </>
  );
});
