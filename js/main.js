import { products } from "./product.js";

document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  // Function to generate product cards
  function displayProducts() {
    productGrid.innerHTML = ""; // Clear existing content

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-price">€ ${product.price.toFixed(2)}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-tag">In Stock</div>
                <button class="view-details" data-id="${
                  product.id
                }">View Details</button>
            `;

      productGrid.appendChild(productCard);
    });

    // Add event listeners to "View Details" buttons
    document.querySelectorAll(".view-details").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        localStorage.setItem("SELECTED_PRODUCT_KEY", productId);
        window.location.href = "detailearph.html";
      });
    });
  }

  displayProducts();
});
