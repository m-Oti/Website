import { products } from "./product.js";

document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  // Function to generate product cards
  function displayProducts() {
    productGrid.innerHTML = ""; // Clear existing content

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      // Add event listeners to "View Details" buttons
      productCard.addEventListener("click", (e) => {
        window.location.href = `detail.html?product=${product.id}`;
      });

      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-price">€ ${product.price.toFixed(2)}</div>
                <div class="product-name">${product.name}</div>
        `;
      productGrid.appendChild(productCard);
    });
  }
  displayProducts();
});
