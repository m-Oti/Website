document.addEventListener("DOMContentLoaded", function () {
    const addToCartButton = document.getElementById("add-to-cart-btn");

    if (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            const product = {
                name: document.querySelector("h1").textContent, // Get product name dynamically
                price: parseFloat(document.querySelector(".new-price").textContent.replace("€", "").trim()), // Extract price correctly
                quantity: parseInt(document.getElementById("quantity").value), // Get quantity input
                image: document.querySelector(".product-image img").src // Get product image dynamically
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProduct = cart.find(item => item.name === product.name);

            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        });
    }
});
