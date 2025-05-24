import { products } from "./product-list.js";

const titleMap = {
  null: {
    title: "All Items",
    breadcrumb: "Products",
    subcategories: `
          <a href="?category=men">Men</a>
          <a href="?category=women">Women</a>` ,
  },
  men: {
    title: "Men Clothing",
    breadcrumb: "Men",
  },
  women: {
    title: "Women Clothing",
    breadcrumb: "Women",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const filterdProducts = products.filter((prod) => {
    if (!category) {
      return true; // use all products
    } else {
      return prod.category == category;
    }
  });

  if (category) {
    const productsBreadcrumb = document.createElement("a");
    productsBreadcrumb.innerHTML = `<a href="products.html">Products</a>`;
    document.querySelector(".breadcrumb").appendChild(productsBreadcrumb);
  }
  const categoryBreadcrumb = document.createElement("span");
  categoryBreadcrumb.innerHTML = titleMap[category].breadcrumb;
  document.querySelector(".breadcrumb").appendChild(categoryBreadcrumb);

  document.querySelector(".category-title").innerHTML =
    titleMap[category].title;

  document.querySelector(".subcategories").innerHTML =
    titleMap[category].subcategories;

  // Function to generate product cards
  function displayProducts() {
    productGrid.innerHTML = ""; // Clear existing content

    filterdProducts.forEach((product) => {
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
