// Start of Javascript for the Increase and decrease buttons
const increaseButtons = document.querySelectorAll(".quantity-increase");
const decreaseButtons = document.querySelectorAll(".quantity-decrease");

increaseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // get the input field
    const inputField = this.parentElement.querySelector(".quantity-input");

    // get value and increase it
    inputField.value = parseInt(inputField.value, 10) + 1;
    updateSubtotal();
  });
});

decreaseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const inputField = this.parentElement.querySelector(".quantity-input");

    const currentValue = parseInt(inputField.value, 10);
    if (currentValue > 1) {
      inputField.value = currentValue - 1;
      updateSubtotal();
    }
  });
});
// End of Javascript for the Increase and decrease buttons

// Start of Javascript for the calculation of the Subtotal value
function updateSubtotal() {
  let subtotal = 0;

  document.querySelectorAll(".cart-item").forEach((item) => {
    const priceText = item.querySelector(".cart-item-price").textContent;

    // get rid of the "€ " and convert it to a float.
    const price = parseFloat(priceText.replace("€", ""));
    const quantity = parseInt(item.querySelector(".quantity-input").value, 10);

    subtotal += price * quantity;
  });

  document.querySelector(
    "#subtotal-price"
  ).textContent = `Subtotal: € ${subtotal.toFixed(2)}`;
}

updateSubtotal();
// End of Javascript for the calculation of the Subtotal value

// Start of Javascript for the Delivery Option
function updateDeliveryInfo() {
  const deliveryPriceField = document.querySelector("#delivery-price");
  const deliveryDateField = document.querySelector("#delivery-date");
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  if (this.value === "express") {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    deliveryPriceField.textContent = "Delivery: € 6.99";
    deliveryDateField.textContent = `Delivery date: ${deliveryDate.toLocaleDateString(
      "en-US",
      dateOptions
    )}`;
  } else {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    deliveryPriceField.textContent = "Delivery: € 0.00";
    deliveryDateField.textContent = `Delivery date: ${deliveryDate.toLocaleDateString(
      "en-US",
      dateOptions
    )}`;
  }
}

const deliveryOptions = document.querySelectorAll(".delivery-option");
updateDeliveryInfo();

deliveryOptions.forEach((option) => {
  option.addEventListener("change", updateDeliveryInfo);
});
// End of Javascript for the Delivery Option

// Start of Javascript for Discount codes
function applyDiscount() {
  console.log("applyDiscount function executed!"); // Test-Log
  const promoInput = document.querySelector("#promo-code");
  const discountText = document.querySelector("#discount-text");
  const discountPriceField = document.querySelector("#discount-price");
  const subtotalField = document.querySelector("#subtotal-price");

  let discountPercentage = 0;

  if (promoInput.value === "discount10") {
    discountPercentage = 10;
    discountText.textContent = "10% discount applied";
  } else if (promoInput.value === "discount20") {
    discountPercentage = 20;
    discountText.textContent = "20% discount applied";
  } else {
    discountText.textContent = "No discount code applied";
  }

  const discountAmount =
    (parseFloat(subtotalField.textContent.replace("Subtotal: €", "")) *
      discountPercentage) /
    100;
  discountPriceField.textContent = `Discount: € - ${discountAmount.toFixed(2)}`;
}

document
  .querySelector("#apply-discount")
  .addEventListener("click", applyDiscount);

// End of Javascript for Discount codes
