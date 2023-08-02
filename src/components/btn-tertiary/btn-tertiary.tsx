import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./app.css?inline";

export default component$(() => {
  useStyles$(styles);
  return <button class="btn-product-home">Add to cart</button>;
});
