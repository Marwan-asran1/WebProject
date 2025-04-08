function validate() {
 
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMsg = document.getElementById('errorMsg');

   const isValid = password.length >= 1
                  // /[A-Z]/.test(password) &&
                  // /\d/.test(password) &&
                  // /[@$!%*?&#]/.test(password);

  if (!isValid) {
    errorMsg.textContent = "Password must be 8+ chars, include uppercase, number, and special character.";
    return false;
  } else if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    return false;
  } else {
    errorMsg.textContent = "";
    Direct();
    return false; 
  }
  
}

function Direct() {
  const em = document.getElementById('em').value;
  const username = em.split('@')[0];
  localStorage.setItem("username", username);

  if (username.toLowerCase() === "admin") {
    window.location.href = "D:///UNI/Web/WebProject 1.2/Admin.html";
  } else {
    window.location.href = "D:///UNI/Web/WebProject 1.2/Homepage.html";
  }
}
