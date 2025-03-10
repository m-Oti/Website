// Start of Javascript for the Increase and decrease buttons
const increaseButtons = document.querySelectorAll(".quantity-increase");
const decreaseButtons = document.querySelectorAll(".quantity-decrease");

increaseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // get the input field
    const inputField = this.parentElement.querySelector(".quantity-input");

    // get value and increase it
    let currentValue = parseInt(inputField.value, 10);
    inputField.value = currentValue + 1;
    updateSubtotal();
  });
});

decreaseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const inputField = this.parentElement.querySelector(".quantity-input");

    let currentValue = parseInt(inputField.value, 10);
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
    let priceText = item.querySelector(".cart-item-price").textContent;

    // get rid of the "€ " and convert it to a float. The following line was written with the help of ChatGPT
    let price = parseFloat(priceText.replace("€", "").trim());

    let quantity = parseInt(item.querySelector(".quantity-input").value, 10);

    subtotal += price * quantity;
  });

  document.querySelector(
    "#subtotal-price"
  ).textContent = `Subtotal: € ${subtotal.toFixed(2)}`;
}

updateSubtotal();
// End of Javascript for the calculation of the Subtotal value

// Start of Javascript for the Delivery Option
const deliveryOptions = document.querySelectorAll("input[name='delivery']");

deliveryOptions.forEach((option) => {
  option.addEventListener("change", function () {
    const deliveryPriceField = document.querySelector("#delivery-price");
    const deliveryDateField = document.querySelector("#delivery-date");

    if (this.value === "express") {
      deliveryPriceField.textContent = "Delivery: € 6.99";
      deliveryDateField.textContent = "Delivery date: March 17, 2025";
    } else {
      deliveryPriceField.textContent = "Delivery: € 0.00";
      deliveryDateField.textContent = "Delivery date: March 20, 2025";
    }
  });
});
// End of Javascript for the Delivery Option
