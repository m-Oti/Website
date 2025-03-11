document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-to-cart-btn').addEventListener('click', function () {

        const quantity = document.getElementById('quantity').value;

        const product = {
            img: document.querySelector('.product-card img').src,  // Product image source
            name: document.querySelector('.product-name').textContent,  // Product name
            price: document.querySelector('.product-price').textContent,  // Product price
            quantity: parseInt(quantity)  // Get quantity from input field
        };

        // Retrieve current cart data from localStorage or initialize as empty array if none exists
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex > -1) {
            // If the product already exists, update the quantity
            cart[existingProductIndex].quantity += product.quantity;
            console.log("Updated product quantity:", cart[existingProductIndex]);
        } else {
            // Otherwise, add the product to the cart
            cart.push(product);
            console.log("Added new product to cart:", product);
        }

        // Store the updated cart in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    });
});
