import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import Details from "~/components/details/details";
import ProductGallery from "~/components/productGallery/productGallery";
import ProductPrice from "~/components/productPrice/productPrice";
import ProductLiquidCode from "~/components/productliquidcode/productLiquidCode";
import Quantitybtn from "~/components/quantity-btn/quantitybtn";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container">
      <div class="d-flex">
        <div class="container-image col1">
          <ProductGallery />
        </div>
        <div class="col2">
          <ProductPrice title="Lily Plushie" price={31.95} />
          <div class="flex">
            <Quantitybtn />
            <Button title="Add to cart" />
          </div>
          <img src="" alt="" />
          <ProductLiquidCode
            image="/media/Duolingo_transparent.webp"
            productName="duo"
          />
          <Details
            title="Details"
            subtitle="Meet the Lily Plushie, your new sarcastic companion who is annoyed by life and ready to avoid people with you. Cuddle up and share your love for obscure bands and old dogs together. Or don’t, she doesn’t really care either way. Hurry up and get yours, before it becomes too mainstream. 10” tall This item ships from the USA Suitable for ages 14+"
          />
        </div>
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
