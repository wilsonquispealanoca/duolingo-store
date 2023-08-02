import { useStyles$, component$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import ProductItem from "../productItem/productItem";

const data = [
  {
    id: 1,
    image: "/media/Duolingo_t_shirt_black.webp",
    name: "Remind Me T-Shirt",
    price: 29.95,
    url: "duo",
  },
  {
    id: 2,
    image: "/media/Duolingo_t_shirt_white.webp",
    name: "Duo Strut T-Shirt",
    price: 29.95,
    url: "lily",
  },
  {
    id: 3,
    image: "/media/Duolingo_t_shirt_green.webp",
    name: "The Duo Polo",
    price: 43.95,
    url: "lily",
  },
  {
    id: 4,
    image: "/media/Duolingo_duo_stickers.webp",
    name: "Duo Sticker Pack",
    price: 9.95,
    url: "lily",
  },
  {
    id: 5,
    image: "/media/Duolingo_mixed_emotion.webp",
    name: "Duo's Mixed Emotions Pin",
    price: 14.95,
    url: "lily",
  },
  {
    id: 6,
    image: "/media/Duolingo_lily_stickers.webp",
    name: "Lily Sticker Pack",
    price: 9.95,
    url: "lily",
  },
];

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container m-4">
      <ul class="grid">
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
