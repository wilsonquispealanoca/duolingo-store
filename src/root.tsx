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

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  url: string;
  /* rating: {
      rate: number;
      count: number;
    }; */
}

interface ICartItem {
  item: Product;
  quantity: number;
}

interface IGlobalState {
  cart: ICartItem[];
}

export const CONTEXT_NAME = "duolingo-store";

export const GlobalContext = createContextId<IGlobalState>(CONTEXT_NAME);

export default component$(() => {
  /* Initial state global app */
  const stateCart = useStore<IGlobalState>({
    cart: [],
  });

  useContextProvider(GlobalContext, stateCart);
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
