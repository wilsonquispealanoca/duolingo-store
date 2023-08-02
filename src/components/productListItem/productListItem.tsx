import { useStyles$, component$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import ProductItem from "../productItem/productItem";

const data = [
  {
    id: 1,
    image: "/media/Duolingo.webp",
    name: "Duo Plushie",
    price: 29.95,
    url: "duo",
  },
  {
    id: 2,
    image: "/media/Duolingo_Lily.webp",
    name: "Lily Plushie",
    price: 33.95,
    url: "lily",
  },
];

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container m-4">
      <ul class="grid-2">
        {data.map((item) => (
          <ProductItem
            image={item.image}
            title={item.name}
            price={item.price}
            url={item.url}
          />
        ))}
      </ul>
    </div>
  );
});
