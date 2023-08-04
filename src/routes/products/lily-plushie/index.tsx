import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import Details from "~/components/details/details";
import ProductGallery from "~/components/productGallery/productGallery";
import ProductPrice from "~/components/productPrice/productPrice";
import ProductLiquidCode from "~/components/productliquidcode/productLiquidCode";
import Quantitybtn from "~/components/quantity-btn/quantitybtn";

const data = [
  {
    id: 1,
    image: "/media/Duolingo_transparent.webp",
    title: "Llly Plushie",
    price: 31.95,
    description:
      "Meet the Lily Plushie, your new sarcastic companion who is annoyed by life and ready to avoid people with you. Cuddle up and share your love for obscure bands and old dogs together. Or don’t, she doesn’t really care either way. Hurry up and get yours, before it becomes too mainstream. 10” tall This item ships from the USA Suitable for ages 14+",
    category: "pushie",
    url: "duo",
  },
];
export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container">
      <div class="d-flex">
        {data.map((product, i) => (
          <li key={i}>
            <div class="container-image col1">
              <ProductGallery />
            </div>
            <div class="col2">
              <ProductPrice title={product.title} price={product.price} />
              <div class="flex">
                <Quantitybtn />
                <Button product={product} title="Add to cart" />
              </div>
              <ProductLiquidCode
                image={product.image}
                productName={product.url}
              />
              <Details title="Details" subtitle={product.description} />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Lily-plushie",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
