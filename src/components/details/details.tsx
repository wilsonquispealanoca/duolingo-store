import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./details.css?inline";
import List from "../lists/lists";

interface DetailsProps {
  title: string;
  subtitle: string;
}

export default component$<DetailsProps>(({ title, subtitle }) => {
  useStyles$(styles);
  return (
    <div>
      <h2 class="detail-title">{title}</h2>
      <p class="detail-description">{subtitle}</p>
    </div>
  );
});
