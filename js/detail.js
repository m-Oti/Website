import { products } from "./product-list.js";

const imgElement = document.querySelector(".product-image");
const titleElement = document.querySelector(".product-title");
const descriptionElement = document.querySelector(".product-description");
const priceElement = document.querySelector(".product-price");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("product");
const product = products.find((prod) => prod.id == id);

imgElement.src = product.image;
titleElement.innerHTML = product.name;
descriptionElement.innerHTML = product.description ?? "";
priceElement.innerHTML = `€ ${product.price.toFixed(2)}`;

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("product");

  if (productId == 15) {
    document.querySelector(".detail-earphones").innerHTML = `
             <section
      class="feature-section"
      style="background-image: url(img/detailed/earsoundquality.jpg)"
    >
      <div class="feature-text left">
        <h3>Custom Sound Profiles</h3>
        <h2>Tailored to Your Ears</h2>
        <div class="underline"></div>
        <p>
          Switch between three custom sound profiles to match your
          style—Balanced, Bass Boost, and Pure Sound.
        </p>
      </div>
    </section>

    <section
      class="feature-section"
      style="background-image: url(img/detailed/earfuncool.jpg)"
    >
      <div class="feature-text right">
        <h3>32 Hours of Battery Life</h3>
        <h2>Powered For Days</h2>
        <div class="underline"></div>
        <p>
          Battery life that actually lasts. With 8 hours of playtime and a fast
          charging case, the earbuds will last when you need them most.
        </p>
      </div>
    </section>

    <section
      class="feature-section"
      style="background-image: url(img/detailed/earwaterp.jpg)"
    >
      <div class="feature-text left">
        <h3>Water & Sweat Resistant</h3>
        <h2>Built for Any Adventure</h2>
        <div class="underline"></div>
        <p>
          With an IPX6 water resistance rating, your earbuds can handle sweat,
          rain, and even accidental splashes.
        </p>
      </div>
    </section>
    `;
  }
});
