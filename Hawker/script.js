document.addEventListener("DOMContentLoaded", function () {
    let productCount = 0;
    const productFields = document.getElementById("product-fields"); // Corrected ID
    
    function createProductFields() {
        productCount++;
        const productField = document.createElement("div");
        productField.classList.add("product-field");
        productField.innerHTML = `
            <h3>Product ${productCount}</h3>
            <div class="section">
                <label for="product-name-${productCount}">Product Name:</label>
                <input type="text" id="product-name-${productCount}" name="product-name-${productCount}">
            </div>
            <div class="section">
                <label for="product-description-${productCount}">Product Description:</label>
                <textarea id="product-description-${productCount}" name="roduct-description-${productCount}" rows="3"></textarea>
            </div>
            <div class="section">
                <label for "product-price-${productCount}">Price:</label>
                <input type="text" id="product-price-${productCount}" name="product-price-${productCount}">
            </div>
            <div class="section">
            <label for "product-quantity-${productCount}">Quantity:</label>
            <input type="number" id="product-quantity-${productCount}" name="product-quantity-${productCount}" min="1" max="10">
            </div>
        `;
        productFields.appendChild(productField);
    }

    document.getElementById("add-item").addEventListener("click", createProductFields);
});


// document.addEventListener("DOMContentLoaded", function () {
//     let productCount = 0;
//     const productFields = document.getElementById("product-fields");
//     const productForm = document.getElementById("product-form");

//     function createProductFields() {
//         productCount++;
//         const productField = document.createElement("div");
//         productField.classList.add("product-field");
//         productField.innerHTML = `
//             <h3>Product ${productCount}</h3>
//             <div class="section">
//                 <label for="product-name-${productCount}">Product Name:</label>
//                 <input type="text" id="product-name-${productCount}" name="product_name[]">
//             </div>
//             <div class="section">
//                 <label for="product-description-${productCount}">Product Description:</label>
//                 <textarea id="product-description-${productCount}" name="product_descript[]" rows="3"></textarea>
//             </div>
//             <div class="section">
//                 <label for="product-price-${productCount}">Price:</label>
//                 <input type="text" id="product-price-${productCount}" name="product_price[]">
//             </div>
//             <div class="section">
//                 <label for="product-quantity-${productCount}">Quantity:</label>
//                 <input type="number" id="product-quantity-${productCount}" name="product_quantity[]" min="1" max="10">
//             </div>
//         `;
//         productFields.appendChild(productField);
//     }

//     document.getElementById("add-item").addEventListener("click", createProductFields);

//     productForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Collect and send data to PHP script using AJAX
//         const formData = new FormData(productForm);
//         formData.append("productCount", productCount);

//         fetch("project.php", {
//             method: "POST",
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Handle the response from the PHP script if needed
//             console.log(data);
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });
//     });
// });
