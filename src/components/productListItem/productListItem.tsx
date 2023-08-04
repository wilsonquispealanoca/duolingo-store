import { useStyles$, component$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import ProductItem from "../productItem/productItem";

const data = [
  {
    id: 1,
    image: "/media/Duolingo.webp",
    title: "Duo Plushie",
    price: 29.95,
    description: "description1",
    category: "pushie",
    url: "duo",
  },
  {
    id: 2,
    image: "/media/Duolingo_Lily.webp",
    title: "Lily Plushie",
    price: 33.95,
    description: "description1",
    category: "pushie",
    url: "lily",
  },
];

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container m-4">
      <ul class="grid-2">
        {data.map((product, i) => (
          <ProductItem product={product} key={i} />
        ))}
      </ul>
    </div>
  );
});
