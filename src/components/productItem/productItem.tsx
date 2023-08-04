import { component$, useStyles$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import styles from "./app.css?inline";
import { Image } from "@unpic/qwik";
import ProductPrice from "../productPrice/productPrice";
import BtnTertiary from "../btn-tertiary/btn-tertiary";

interface ItemProps {
  product: Product;
}

export default component$(({ product }: ItemProps) => {
  // const stateCart: any = useContext(CartInformationContext);

  /*  const addToCart = (product: ItemProps) => {
    stateCart.cart.value = [...stateCart.cart.value, product];
  }; */

  useStyles$(styles);
  return (
    <li class="list-none">
      <div class="relative">
        <Link href={`/products/${product.url}-plushie/`}>
          <Image
            src={`${product.image}`}
            layout="constrained"
            width={500}
            height={440}
            alt="A lovely bath"
            class="image-fluid-item"
          />
        </Link>
        <BtnTertiary product={product} />
      </div>
      <ProductPrice title={product.title} price={product.price} />
    </li>
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
