// cart.js

function addToCart(productName, productPrice) {
    // Create a cart item object
    var cartItem = {
        name: productName,
        price: productPrice,
        quantity: parseInt(document.querySelector('input[type="number"]').value)
    };

    // Check if the cart already exists in local storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    var existingProductIndex = cart.findIndex(item => item.name === cartItem.name);

    if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        cart[existingProductIndex].quantity += cartItem.quantity;
    } else {
        // If the product is not in the cart, add it
        cart.push(cartItem);
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, you can update the cart display or show a confirmation message
    alert('Item added to cart!');
    // Display the updated cart on the cart.html page
    displayCart();
}

// Function to display cart items on the cart.html page
function displayCart() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartTable = document.getElementById('cartTable');

    // Clear existing table content
    cartTable.innerHTML = '<thead><tr><td>Remove</td><td>Product</td><td>Price</td><td>Quantity</td><td>Total</td></tr></thead><tbody>';

    // Loop through cart items and append to the table
    cart.forEach(function (item) {
        var row = '<tr>' +
            '<td><a href="#" onclick="removeItem(\'' + item.name + '\')"><i class="far fa-times-circle"></i></a></td>' +
            '<td>' + item.name + '</td>' +
            '<td>Rs. ' + item.price + '</td>' +
            '<td><span>' + item.quantity + '</span></td>' + // Change input to span
            '<td>Rs. ' + (item.price * item.quantity) + '</td>' +
            '</tr>';
        cartTable.innerHTML += row;
    });

    // Close the table body
    cartTable.innerHTML += '</tbody>';
}



// Function to remove an item from the cart
function removeItem(productName) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCart = cart.filter(function (item) {
        return item.name !== productName;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCart();
}

// Function to update the quantity in the cart
function updateQuantity(productName, newQuantity) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCart = cart.map(function (item) {
        if (item.name === productName) {
            item.quantity = parseInt(newQuantity);
        }
        return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Call displayCart to update the displayed cart
    displayCart();
}

// Display the cart when the page loads
displayCart();
