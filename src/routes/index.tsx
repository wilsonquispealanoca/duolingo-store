import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import Details from "~/components/details/details";
import ProductGallery from "~/components/productGallery/productGallery";
import ProductPrice from "~/components/productPrice/productPrice";
import ProductLiquidCode from "~/components/productliquidcode/productLiquidCode";
import Quantitybtn from "~/components/quantity-btn/quantitybtn";

export default component$(() => {
  return (
    <div class="container">
      <ProductGallery />
      <ProductPrice title="Lily Plushie" price={31.95} />
      <div class="flex">
        <Quantitybtn />
        <Button title="Add to cart" />
      </div>
      <img src="" alt="" />
      <ProductLiquidCode />
      <Details
        title="Details"
        subtitle="Meet the Lily Plushie, your new sarcastic companion who is annoyed by life and ready to avoid people with you. Cuddle up and share your love for obscure bands and old dogs together. Or don’t, she doesn’t really care either way. Hurry up and get yours, before it becomes too mainstream. 10” tall This item ships from the USA Suitable for ages 14+"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
