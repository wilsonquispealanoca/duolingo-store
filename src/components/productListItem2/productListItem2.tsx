import { useStyles$, component$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import ProductItem from "../productItem/productItem";
import { products } from "../data/products";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container">
      <ul class="grid">
        {products.slice(2).map((product, i) => (
          <ProductItem product={product} key={i} />
        ))}
      </ul>
    </div>
  );
});
