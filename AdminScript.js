
let quantity = 10;
function increment(button) {
    const quantitySpan = button.closest('.Quantity').querySelector('.Product_quantity');
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity; 
}

function decrement(button) {
    const quantitySpan = button.closest('.Quantity').querySelector('.Product_quantity');
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity; 
    }
}
function toggleSubMenu() {
    const subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("active");
  }
window.addEventListener("click", function (e) {
    const subMenu = document.getElementById("subMenu");
    const profileBtn = document.querySelector(".profile");

    if (!subMenu.contains(e.target) && !profileBtn.contains(e.target)) {
      subMenu.classList.remove("active");
    }
  });
  window.onload = function() {
    var username = localStorage.getItem('username');
    
    if (username) {
      document.getElementById('username').textContent = username;
    }
  }
  
