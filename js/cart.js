const cartItemsContainer = document.getElementById("cart-items");
const subtotalPrice = document.getElementById("subtotal-price");
const totalPrice = document.getElementById("total-price");
const discountPriceField = document.getElementById("discount-price");
const deliveryPriceField = document.getElementById("delivery-price");
const deliveryDateField = document.getElementById("delivery-date");
const promoInput = document.getElementById("promo-code");
const discountText = document.getElementById("discount-text");

let deliveryCost = 0;
let discountAmount = 0;

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<li class="empty-cart">Your shopping cart is empty.</li>';
    subtotalPrice.textContent = "Subtotal: € 0.00";
    discountPriceField.textContent = "Discount: € 0.00";
    deliveryPriceField.textContent = "Delivery: € 0.00";
    totalPrice.textContent = "Total: € 0.00";
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.classList.add("card");
    cartItem.innerHTML = `
                <div class="item-info">
                    <img src="${item.image}" alt="${
      item.name
    }" class="cart-item-image">
                    <div class="item-detail">
                        <h3 class="cart-item-title">${item.name}</h3>
                        <p class="cart-item-price">€ ${item.price.toFixed(
                          2
                        )}</p>
                    </div>
                </div>
                <div class="item-action">
                    <button class="quantity-decrease secondary slim" data-index="${index}">−</button>
                    <input type="text" value="${
                      item.quantity
                    }" class="quantity-input" data-index="${index}">
                    <button class="quantity-increase secondary slim" data-index="${index}">+</button>
                    <button class="cart-item-remove danger slim" data-index="${index}">Delete</button>
                </div>
            `;
    cartItemsContainer.appendChild(cartItem);
  });
  subtotalPrice.textContent = `Subtotal: € ${subtotal.toFixed(2)}`;
  totalPrice.textContent = `Total: € ${subtotal.toFixed(2)}`;
}

cartItemsContainer.addEventListener("click", function (event) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let index = event.target.dataset.index;

  if (event.target.classList.contains("quantity-increase")) {
    cart[index].quantity++;
  } else if (event.target.classList.contains("quantity-decrease")) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    }
  } else if (event.target.classList.contains("cart-item-remove")) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
});

cartItemsContainer.addEventListener("ïnput", function (event) {
  if (event.target.classList.contains("quantity-input")) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = event.target.dataset.index;
    let newQuantity = parseInt(event.target.value);

    if (!isNaN(newQuantity) && newQuantity > 0) {
      cart[index].quantity = newQuantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
});

function updateDeliveryInfo() {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  if (this.value === "express") {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    deliveryCost = 6.99;
    deliveryPriceField.textContent = "Delivery: € 6.99";
    deliveryDateField.textContent = `Delivery date: ${deliveryDate.toLocaleDateString(
      "en-US",
      dateOptions
    )}`;
  } else {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    deliveryCost = 0.0;
    deliveryPriceField.textContent = "Delivery: € 0.00";
    deliveryDateField.textContent = `Delivery date: ${deliveryDate.toLocaleDateString(
      "en-US",
      dateOptions
    )}`;
  }
  updateTotal();
}
updateDeliveryInfo();

function applyDiscount() {
  let subtotal = parseFloat(
    subtotalPrice.textContent.replace("Subtotal: €", "")
  );
  discountAmount = 0;

  if (promoInput.value === "discount10") {
    discountAmount = (subtotal * 10) / 100;
    discountText.textContent = "10% discount applied";
  } else if (promoInput.value === "discount20") {
    discountAmount = (subtotal * 20) / 100;
    discountText.textContent = "20% discount applied";
  } else {
    discountText.textContent = "No discount code applied";
  }

  discountPriceField.textContent = `Discount: € -${discountAmount.toFixed(2)}`;
  updateTotal();
}

function updateTotal() {
  let subtotal =
    parseFloat(subtotalPrice.textContent.replace("Subtotal: €", "")) || 0;
  let total = subtotal - discountAmount + deliveryCost;
  totalPrice.textContent = `Total: € ${total.toFixed(2)}`;
}

const deliveryOptions = document.querySelectorAll(".delivery-option");
deliveryOptions.forEach((option) => {
  option.addEventListener("change", updateDeliveryInfo);
});

document
  .getElementById("apply-discount")
  .addEventListener("click", applyDiscount);

loadCart();
