function checkPassword() {
  var password = document.getElementById("password").value;
  if (password.length < 8) {
    document.getElementById("message").textContent = "Password must be at least 8 characters long.";
    return false;
  }

  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("message").textContent = "Passwords do not match.";
    return false;
  }
  
  document.getElementById("message").textContent = "Passwords match.";
  return true;
}