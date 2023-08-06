import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./lists.css?inline";

interface ListProps {
  texts: string;
}

export default component$<ListProps>(({ texts }) => {
  useStyles$(styles);
  return (
    <div class="container-list">
      <li class="l-style">{texts}</li>
    </div>
  );
});
