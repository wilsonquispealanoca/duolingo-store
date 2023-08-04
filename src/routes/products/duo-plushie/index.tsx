import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import Details from "~/components/details/details";
import ProductDuoGallery from "~/components/productDuoGallery/productDuoGallery";
import ProductPrice from "~/components/productPrice/productPrice";
import ProductLiquidCode from "~/components/productliquidcode/productLiquidCode";
import Quantitybtn from "~/components/quantity-btn/quantitybtn";

const data = [
  {
    id: 2,
    image: "/media/Duolingo_lily_transparent.webp",
    title: "Duo Plushie",
    price: 29.95,
    description:
      "Never forget a lesson again with the adorable Duo Plushie. It’s the perfect gentle reminder to do your daily Duolingo. Give one as a gift or get one for yourself to make learning even more fun!",
    category: "pushie",
    url: "lily",
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
              <ProductDuoGallery />
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
