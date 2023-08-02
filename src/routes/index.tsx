import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/banner/banner";
import ProductListItem from "~/components/productListItem/productListItem";
import ProductListItem2 from "~/components/productListItem2/productListItem2";

export default component$(() => {
  return (
    <>
      <Banner />
      <ProductListItem />
      <ProductListItem2 />
    </>
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
