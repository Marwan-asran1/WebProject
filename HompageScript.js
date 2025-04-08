function OpenMenu() {
    var menu = document.getElementById("sideMenu");
    var currentWidth = window.getComputedStyle(menu).width;
    if (currentWidth === "0px") {
        menu.style.width = "250px";
    }
}

function CloseMenu() {
    var menu = document.getElementById("sideMenu");
    var currentWidth = window.getComputedStyle(menu).width;
    if (currentWidth === "250px") {
        menu.style.width = "0px";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("MENU").onclick = OpenMenu;
    document.getElementById("closeBtn").onclick = CloseMenu;
    const loginButton = document.getElementById("Loginbtn");

    const username = localStorage.getItem('username');
    const loginTime = localStorage.getItem('loginTime');
    


    if (username) {
        loginButton.innerHTML = '<i class="fa-regular fa-circle-user"></i> Profile';  
        loginButton.addEventListener("click", function() {
            window.location.href = "profile.html";  
        });
    } else {
        loginButton.textContent = "Login";  
        loginButton.addEventListener("click", function() {
            window.location.href = "D:///UNI/Web/WebProject 1.2/Form_1/form1.html";  
        });
    }

    
    window.onload = function() {
        
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
        
        const username = localStorage.getItem('username');
        if (username) {
            
            document.getElementById("loginButton").textContent = "Profile";
        } else {
            document.getElementById("loginButton").textContent = "Login";
        }
    };
    
    


 
});
