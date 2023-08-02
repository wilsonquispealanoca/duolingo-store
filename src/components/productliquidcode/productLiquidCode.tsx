import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./productLiquidCode.css?inline";
import { Image } from "@unpic/qwik";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="product-liquid-container">
      <div class="flex">
        <figure>
          <Image
            src="../src/media/Duolingo_transparent.webp"
            layout="constrained"
            width={80}
            height={80}
            alt="A lovely bath"
          />
        </figure>
        <div class="product-liquid-description">
          <div>
            <b>Bundle plushies for $5 off!</b>
          </div>
          <div>Add Duo to your purchase</div>
        </div>
      </div>
    </div>
  );
});
