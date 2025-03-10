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
  });
});

decreaseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const inputField = this.parentElement.querySelector(".quantity-input");

    let currentValue = parseInt(inputField.value, 10);
    if (currentValue > 1) {
      inputField.value = currentValue - 1;
    }
  });
});
// End of Javascript for the Increase and decrease buttons
