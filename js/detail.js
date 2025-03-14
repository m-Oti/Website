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
