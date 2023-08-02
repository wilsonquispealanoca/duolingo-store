import { component$, useStore, useStyles$, $, QRL } from "@builder.io/qwik";
import styles from "./app.css?inline";
import { Image } from "@unpic/qwik";

interface ProductGalleryProps {
  onClick$?: QRL<() => void>;
  itemImage: string;
}

export default component$(() => {
  useStyles$(styles);
  const store = useStore({
    list: [
      "../src/media/Duolingo_Lily.webp",
      "../src/media/Duolingo_Lily2.webp",
      "../src/media/Duolingo_Lily3.webp",
      "../src/media/Duolingo_Lily4.webp",
    ],
    currentIndex: 0,
  });

  const handleImageClick = $((itemIndex: number) => {
    store.currentIndex = itemIndex;
  });

  return (
    <div class="p-3">
      <figure>
        <Image
          src={store.list[store.currentIndex]}
          layout="constrained"
          width={960}
          height={1200}
          alt="A lovely bath"
          class="image-fluid"
        />
      </figure>
      <ul class="slide-product">
        {store.list.map((item, index) => (
          <ProductGalleryItem
            itemImage={item}
            onClick$={() => handleImageClick(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
});

export const ProductGalleryItem = component$<ProductGalleryProps>((props) => {
  return (
    <li key={props.itemImage} class="list-style-none" onClick$={props.onClick$}>
      <Image
        src={props.itemImage}
        layout="constrained"
        width={160}
        height={160}
        alt="A lovely bath"
        class="image-fluid-slide image-fluid"
      />
    </li>
  );
});
