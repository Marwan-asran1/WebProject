var all_products_JSON = [
    { id: 0, img: "d1.webp", name: "iPhone 16e", price: 700 },
    { id: 1, img: "d22.jpg", name: "Iphone 15", price: 750 },
    { id: 2, img: "air.jpg", name: "AirPods 3Gen", price: 300 },
    { id: 3, img: "an5.webp", name: "Acer Nitro 5", price: 1300.99 }
];

var cart = document.querySelector(".Cart-menu");
var product_cart = [];


function open_cart() {
    cart.classList.add("active");
}
function close_cart() {
    cart.classList.remove("active");
}

function addToCart(id, btn) {
    product_cart.push(all_products_JSON[id]);
    alert(all_products_JSON[id].name + " added to cart!");
    btn.classList.add("active");
    updateCartDisplay();
}


function removeFromCart(index) {
    product_cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.querySelector(".item-in-cart");
    const cartCount = document.querySelector(".top-cart h3 span");
    const cartTotal = document.querySelector(".price-cart-total");

    cartItemsContainer.innerHTML = '';
    let total = 0;

    product_cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
    
        div.innerHTML = `
    <div>
        <p><strong>${item.name}</strong>  - $${item.price}</p>
    </div>
    <button class="remove-btn" data-index="${index}">
        <i class="fa-solid fa-trash"></i>
    </button>
`;
    
        cartItemsContainer.appendChild(div);
        total += item.price;
    });
    

    cartCount.textContent = `(${product_cart.length} Items in cart)`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            removeFromCart(index);
        });
    });
    
}

window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(index, btn));
    });
});
