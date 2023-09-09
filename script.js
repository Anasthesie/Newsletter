function validateEmail() {
  const errorLable = document.getElementById("errorlable");
  const inputEmail = document.getElementById("email");
  const checkEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value.match(checkEmailRegex)) {
    window.location.href = "success-page.html";
    return true;
  } else {
    inputEmail.style.border = "1px solid hsl(4, 100%, 67%)";
    inputEmail.style.color = "hsl(4, 100%, 67%)";
    inputEmail.style.backgroundColor = "#ffe8e6";
    errorLable.style.display = "block";
    return false;
  }
}
