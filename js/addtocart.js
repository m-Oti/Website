document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.getElementById("add-to-cart-btn");
  const itemInCart = document.querySelector(".cart-count");

  let cartObject = JSON.parse(localStorage.getItem("cart"));
  if(cartObject){
    itemInCart.innerHTML = cartObject[0].quantity;
  }else{
    itemInCart.innerHTML ="0";
  }
  //itemInCart.innerHTML = cartObject[0].quantity;

  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      const product = {
        name: document.querySelector(".product-title").textContent,
        price: parseFloat(
          document.querySelector(".product-price").textContent.replace("€", "")
        ),
        quantity: parseInt(document.querySelector(".quantity-input").value),
        image: document.querySelector(".product-image").src,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let existingProduct = cart.find((item) => item.name === product.name);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      cartCount = cart.reduce((total, item) => total + item.quantity, 0);
      let cartObject = JSON.parse(localStorage.getItem("cart"));
      itemInCart.innerHTML = cartObject[0].quantity;
      //window.location.href = "cart.html";
    });
  }
});
