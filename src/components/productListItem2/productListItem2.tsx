import { useStyles$, component$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import ProductItem from "../productItem/productItem";

const data = [
  {
    id: 1,
    image: "/media/Duolingo_t_shirt_black.webp",
    title: "Remind Me T-Shirt",
    price: 29.95,
    description: "description1",
    category: "pushie",
    url: "duo",
  },
  {
    id: 2,
    image: "/media/Duolingo_t_shirt_white.webp",
    title: "Duo Strut T-Shirt",
    price: 29.95,
    description: "description1",
    category: "pushie",
    url: "lily",
  },
  {
    id: 3,
    image: "/media/Duolingo_t_shirt_green.webp",
    title: "The Duo Polo",
    price: 43.95,
    description: "description1",
    category: "pushie",
    url: "lily",
  },
  {
    id: 4,
    image: "/media/Duolingo_duo_stickers.webp",
    title: "Duo Sticker Pack",
    price: 9.95,
    description: "description1",
    category: "pushie",
    url: "lily",
  },
  {
    id: 5,
    image: "/media/Duolingo_mixed_emotion.webp",
    title: "Duo's Mixed Emotions Pin",
    price: 14.95,
    description: "description1",
    category: "pushie",
    url: "lily",
  },
  {
    id: 6,
    image: "/media/Duolingo_lily_stickers.webp",
    title: "Lily Sticker Pack",
    price: 9.95,
    description: "description1",
    category: "pushie",
    url: "lily",
  },
];

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container m-4">
      <ul class="grid">
        {data.map((product, i) => (
          <ProductItem product={product} key={i} />
        ))}
      </ul>
    </div>
  );
});
