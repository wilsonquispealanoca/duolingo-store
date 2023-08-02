import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./button.css?inline";

interface ButtonProps {
  title?: string;
}

export default component$<ButtonProps>(({ title }) => {
  useStyles$(styles);
  return <button class="btn btn-primary">{title}</button>;
});
