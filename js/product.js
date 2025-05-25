import { products } from "./product-list.js";

const titleMap = {
  null: {
    title: "All Items",
    breadcrumb: "Products",
    subcategories: `
          <a href="?category=portraits">Portraits</a>
          <a href="?category=textiles">Textiles</a>` ,
  },
  portraits: {
    title: "Portraits",
    breadcrumb: "Portraits",
  },
  textiles: {
    title: "Textiles",
    breadcrumb: "Textiles",
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
    document.querySelector(".breadcrumb").appendChild(productsBreadcrumb);
  }
  const categoryBreadcrumb = document.createElement("span");
  categoryBreadcrumb.innerHTML = titleMap[category].breadcrumb;
  document.querySelector(".breadcrumb").appendChild(categoryBreadcrumb);

  document.querySelector(".category-title").innerHTML =
    titleMap[category].title;


  // Function to generate product cards
  function displayProducts() {
    productGrid.innerHTML = ""; // Clear existing content

    filterdProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      // Add event listeners to "View Details" buttons
      productCard.addEventListener("click", (e) => {
        //window.location.href = `detail.html?product=${product.id}`;
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

  function renderCustomForm(category) {
    const formContainer = document.getElementById("customFormContainer");
  
    if (!["portraits", "textiles"].includes(category)) {
      formContainer.innerHTML = ""; // Clear form if no relevant category
      return;
    }
  
    const sizeOptions =
      category === "portraits"
        ? ["Small", "Medium", "Large"]
        : ["Blazer", "Jacket", "Pocket"];
  
        formContainer.innerHTML = `
        <h2>Custom Order Form</h2>
        <form id="customOrderForm">
          <label>First Name:
            <input type="text" name="firstName" required>
          </label><br>
          
          <label>Last Name:
            <input type="text" name="lastName" required>
          </label><br>
          
          <label>Email:
            <input type="email" name="email" required>
          </label><br>
          
          <label>Phone:
            <input type="tel" name="phone" required>
          </label><br>
          
          <label>${category === "portraits" ? "Size" : "Type"}:
            <select name="option" required>
              ${sizeOptions.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}
            </select>
          </label><br>
          
          <label>Message:
            <textarea name="message" rows="4" placeholder="Tell me what you have in mind..." required></textarea>
          </label><br>
          
          <button type="submit">Submit Order</button>
        </form>
      `;
      
  
    document
      .getElementById("customOrderForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const orderData = Object.fromEntries(formData.entries());
        console.log("Submitted Order:", orderData);
        alert("Thank you for your submission!");
        this.reset();
      });
  }
  
  renderCustomForm(category);
  
});
