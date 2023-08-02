import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./lists.css?inline";

interface ListProps {
  text1: string;
  text2: string;
  text3: string;
}

export default component$<ListProps>(({ text1, text2, text3 }) => {
  useStyles$(styles);
  return (
    <ul class="p-left">
      <li>{text1}</li>
      <li>{text2}</li>
      <li>{text3}</li>
    </ul>
  );
});
