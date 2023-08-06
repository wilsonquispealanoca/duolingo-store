import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { products } from "~/components/data/products";
import { component$, useStyles$, $, useStore } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import styles from "../../../components/productGallery/app.css?inline";

import Button from "~/components/button/button";
import Details from "~/components/details/details";

import ProductPrice from "~/components/productPrice/productPrice";
import ProductLiquidCode from "~/components/productliquidcode/productLiquidCode";
import Quantitybtn from "~/components/quantity-btn/quantitybtn";
import { Product } from "~/root";

export const useProducts = routeLoader$(async ({ params, status }) => {
  const [product] = products.filter((p) => p.id === +params.id);

  if (!product) {
    status(404);
  }

  return product as Product;
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

export default component$(() => {
  useStyles$(styles);
  const signal = useProducts();

  const store = useStore({
    currentIndex: 0,
  });
  const handleImageClick = $((itemIndex: number) => {
    store.currentIndex = itemIndex;
  });

  return (
    <div class="container">
      <div class="d-flex">
        <li>
          <div class="container-image col1">
            <div class="p-3">
              <figure>
                <Image
                  src={signal.value.list[store.currentIndex]}
                  layout="constrained"
                  width={960}
                  height={1200}
                  alt="A lovely bath"
                  class="image-fluid"
                />
              </figure>
              <ul class="slide-product">
                {signal.value.list.map((item, index) => (
                  <li key={index} class="list-style-none">
                    <Image
                      src={item}
                      onClick$={() => handleImageClick(index)}
                      layout="constrained"
                      width={160}
                      height={160}
                      alt="A lovely bath"
                      class="image-fluid-slide image-fluid"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="col2">
            <ProductPrice
              title={signal.value.title}
              price={signal.value.price}
            />
            <div class="flex">
              <Quantitybtn />
              <Button product={signal.value} title="Add to cart" />
            </div>
            <ProductLiquidCode
              image={signal.value.image}
              productName={signal.value.url}
            />
            <Details title="Details" subtitle={signal.value.description} />
          </div>
        </li>
      </div>
    </div>
  );
});
