import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./app.css?inline";
import { Image } from "@unpic/qwik";

export default component$(() => {
  useStyles$(styles);
  return (
    <div>
      <section>
        <figure>
          <Image
            src="/media/Duolingo_banner.webp"
            layout="constrained"
            width={1920}
            height={586}
            alt="A lovely bath"
            class="image-banner"
          />
        </figure>
      </section>
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
