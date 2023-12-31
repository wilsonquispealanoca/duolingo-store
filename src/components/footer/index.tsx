import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./app.css?inline";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="footer-relative">
      <div class="footer-position">
        <div class="footer-wave"></div>
        <footer class="footer">
          <div class="footer-container">
            <figure>
              <Image
                src="/media/footer_duo.avif"
                layout="constrained"
                width={222}
                height={222}
                alt="A lovely bath"
                class="footer-image-fluid"
              />
            </figure>
            <div class="item-footer">
              <ul class="footer-social-media">
                <Link href="/">
                  <svg
                    aria-hidden="true"
                    role="img"
                    width="30px"
                    height="30px"
                    viewBox="0 0 30 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M25,15 C25,9.48 20.52,5 15,5 C9.48,5 5,9.48 5,15 C5,19.84 8.44,23.87 13,24.8 L13,18 L11,18 L11,15 L13,15 L13,12.5 C13,10.57 14.57,9 16.5,9 L19,9 L19,12 L17,12 C16.45,12 16,12.45 16,13 L16,15 L19,15 L19,18 L16,18 L16,24.95 C21.05,24.45 25,20.19 25,15 Z"
                      id="Path"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 30 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                  >
                    <path
                      d="M15,5 C17.717,5 18.056,5.01 19.122,5.06 C20.187,5.11 20.912,5.277 21.55,5.525 C22.21,5.779 22.766,6.123 23.322,6.678 C23.8304937,7.17789596 24.2239536,7.78258896 24.475,8.45 C24.722,9.087 24.89,9.813 24.94,10.878 C24.987,11.944 25,12.283 25,15 C25,17.717 24.99,18.056 24.94,19.122 C24.89,20.187 24.722,20.912 24.475,21.55 C24.2246766,22.2177765 23.8311207,22.822617 23.322,23.322 C22.8219615,23.8303192 22.2173093,24.2237526 21.55,24.475 C20.913,24.722 20.187,24.89 19.122,24.94 C18.056,24.987 17.717,25 15,25 C12.283,25 11.944,24.99 10.878,24.94 C9.813,24.89 9.088,24.722 8.45,24.475 C7.78232618,24.2244734 7.17752722,23.8309445 6.678,23.322 C6.16940644,22.8221857 5.77593123,22.2174693 5.525,21.55 C5.277,20.913 5.11,20.187 5.06,19.122 C5.013,18.056 5,17.717 5,15 C5,12.283 5.01,11.944 5.06,10.878 C5.11,9.812 5.277,9.088 5.525,8.45 C5.7752361,7.7821794 6.16880364,7.17732106 6.678,6.678 C7.17767098,6.16923123 7.78242858,5.77572924 8.45,5.525 C9.088,5.277 9.812,5.11 10.878,5.06 C11.944,5.013 12.283,5 15,5 Z M15,10 C12.2385763,10 10,12.2385763 10,15 C10,17.7614237 12.2385763,20 15,20 C17.7614237,20 20,17.7614237 20,15 C20,12.2385763 17.7614237,10 15,10 L15,10 Z M21.5,9.75 C21.5,9.05964406 20.9403559,8.5 20.25,8.5 C19.5596441,8.5 19,9.05964406 19,9.75 C19,10.4403559 19.5596441,11 20.25,11 C20.9403559,11 21.5,10.4403559 21.5,9.75 Z M15,12 C16.6568542,12 18,13.3431458 18,15 C18,16.6568542 16.6568542,18 15,18 C13.3431458,18 12,16.6568542 12,15 C12,13.3431458 13.3431458,12 15,12 Z"
                      id="Shape"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 30 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                  >
                    <path
                      d="M25.162,8.656 C24.398557,8.99369373 23.5889601,9.21547339 22.76,9.314 C23.6337508,8.79143332 24.2877055,7.96901423 24.6,7 C23.78,7.488 22.881,7.83 21.944,8.015 C20.6498495,6.63031951 18.5862776,6.28908903 16.9152663,7.18345292 C15.244255,8.07781681 14.3836288,9.98414575 14.818,11.829 C11.4550225,11.6604433 8.32174389,10.0719946 6.198,7.459 C5.82629012,8.09745032 5.63095514,8.82322672 5.632,9.562 C5.632,11.012 6.37,12.293 7.492,13.043 C6.82800881,13.0220962 6.1786324,12.8427806 5.598,12.52 L5.598,12.572 C5.59841319,14.5630358 7.00151442,16.2781232 8.953,16.673 C8.33661503,16.8400369 7.69030669,16.8646582 7.063,16.745 C7.61012698,18.4491831 9.18045142,19.6167778 10.97,19.65 C9.21794158,21.0260194 6.99074,21.6491034 4.779,21.382 C6.69069779,22.6114328 8.91609682,23.2641239 11.189,23.2620052 C18.882,23.2620052 23.089,16.889 23.089,11.362 C23.089,11.182 23.084,11 23.076,10.822 C23.8948641,10.2301677 24.6015987,9.49701939 25.163,8.657 L25.162,8.656 Z"
                      id="Path"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    width="28px"
                    height="28px"
                    viewBox="0 0 30 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                  >
                    <path
                      stroke="null"
                      d="m23.94665,8.58346c-2.40247,0 -3.96657,-1.95456 -3.96657,-4.35703c0,-0.37038 -0.30018,-0.67055 -0.67055,-0.67055l-3.5913,0c-0.3702,0 -0.67055,0.30018 -0.67055,0.67055l0,14.72389c0,1.41235 -1.1492,2.56137 -2.56155,2.56137s-2.56137,-1.14902 -2.56137,-2.56137c0,-1.41253 1.14902,-2.56155 2.56137,-2.56155c0.37038,0 0.67055,-0.30018 0.67055,-0.67055l0,-3.5913c0,-0.3702 -0.30018,-0.67055 -0.67055,-0.67055c-4.13211,0 -7.49379,3.36185 -7.49379,7.49396c0,4.13211 3.36167,7.49379 7.49379,7.49379c4.13211,0 7.49396,-3.36167 7.49396,-7.49379l0,-6.51747c1.33447,0.71159 2.81964,1.08301 4.35703,1.08301c0.37038,0 0.67055,-0.30018 0.67055,-0.67055l0,-3.5913c0,-0.3702 -0.69064,-0.67055 -1.06101,-0.67055zm0.39046,0"
                      id="Shape"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </Link>
              </ul>
              <div class="footer-termins">
                <span>Duolingo</span>
                <span>Help</span>
                <span>Terms</span>
                <span>Privacy</span>
              </div>
              <p class="copyright">© 2023 Duolingo. All rights reserved.</p>
            </div>
            <div class="footer-extension">
              <div>Plushies</div>
              <div>Apparel</div>
              <div>Accesories</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
});
