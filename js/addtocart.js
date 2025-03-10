document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;

    const product = {
        img: document.querySelector('.product-card img').src,
        name: document.querySelector('.product-name').textContent,
        price: document.querySelector('.product-price').textContent,
        quantity: parseInt(quantity)
    };

    console.log("Product added to cart: ", product);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Current cart: ", cart);
});