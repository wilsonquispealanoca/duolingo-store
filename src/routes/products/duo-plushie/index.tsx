import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import Details from "~/components/details/details";
import ProductDuoGallery from "~/components/productDuoGallery/productDuoGallery";
import ProductPrice from "~/components/productPrice/productPrice";
import ProductLiquidCode from "~/components/productliquidcode/productLiquidCode";
import Quantitybtn from "~/components/quantity-btn/quantitybtn";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container">
      <div class="d-flex">
        <div class="container-image col1">
          <ProductDuoGallery />
        </div>
        <div class="col2">
          <ProductPrice title="Duo Plushie" price={29.95} />
          <div class="flex">
            <Quantitybtn />
            <Button title="Add to cart" />
          </div>
          <img src="" alt="" />
          <ProductLiquidCode
            image="/media/Duolingo_lily_transparent.webp"
            productName="lily"
          />
          <Details
            title="Details"
            subtitle="Never forget a lesson again with the adorable Duo Plushie. It’s the perfect gentle reminder to do your daily Duolingo. Give one as a gift or get one for yourself to make learning even more fun!"
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
