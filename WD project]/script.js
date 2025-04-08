// profile.js
function editProfile() {
    alert("Edit profile clicked!");
  }
  function toggleEditForm() {
    const form = document.getElementById("editForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
  }
  
  function saveProfile() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
  
    if (name) document.getElementById("name").textContent = name;
    if (email) document.getElementById("email").textContent = email;
  
    toggleEditForm();
  }
  function toggleEditForm() {
    document.getElementById("edit").style.display = "block";
    document.getElementById("orders").style.display = "none";
    document.getElementById("settings").style.display = "none";
  }
  
  function switchTab(tabId) {
    const sections = ["edit", "orders", "settings"];
    sections.forEach(id => {
      document.getElementById(id).style.display = (id === tabId) ? "block" : "none";
    });
  }
  
  function saveProfile() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
  
    if (name) document.getElementById("name").textContent = name;
    if (email) document.getElementById("email").textContent = email;
  }
  
  document.getElementById("avatarUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("avatar").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
// ScriptEc.js
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("MENU");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");

  menuBtn.addEventListener("click", function () {
    sideMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    sideMenu.classList.remove("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownParent = dropdownToggle.closest(".dropdown-parent");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownParent.classList.toggle("active");
  });
});
  