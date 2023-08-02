import {
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

/* Add context global app*/

/* type */
interface CartStore {
  cart: string[];
}

export const CartInformationContext = createContextId<CartStore>("cart");

export default component$(() => {
  /* Initial state global app */
  const stateCart = useStore<CartStore>({
    cart: [],
  });

  useContextProvider(CartInformationContext, stateCart);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
