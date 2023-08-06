import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./productLiquidCode.css?inline";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";

interface ImageProps {
  image: string;
  productName: string;
}

export default component$<ImageProps>(({ image, productName }) => {
  useStyles$(styles);
  return (
    <div class="product-liquid-container">
      <Link href={`/products/${productName}`}>
        <div class="flex">
          <figure>
            <Image
              src={`${image}`}
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
            <div class="flex">
              <div>Add</div>
              <span class="product-name">{productName}</span>
              <div>to your purchase"</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});
