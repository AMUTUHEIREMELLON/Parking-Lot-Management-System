const Validate = () => {
  // picking input fields with their names
  let email = document.login.email;
  let password = document.login.password;

  // picking error fields
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  // let confirmPasswordError = document.confirmPasswordError;

  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.textContent = "Email is required";
    emailError.style =
      "color: red; font-size:11px; font-faxmily:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  }
  let emailRegex =   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  if (!email.value.match(emailRegex)) {
    email.style.border = "1px solid red";
    emailError.textContent = "The email address should be valid";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  } else {
    email.style.border = "1px solid green";
    emailError.textContent = "";
    email.focus();
  }

  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password `is required";
    passwordError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    password.focus();
    return false;
  }
  else if (password.value.length < 8) {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password should be at least 8 characters";
    passwordError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    password.focus();
    return false;
  }else{
    password.style.border = "1px solid green";
    passwordError.textContent = "";
    password.focus();
  }
}
