const Validate = () => {
  //   // picking input fields with their names
  let firstName = document.register.firstname;
  let lastName = document.register.lastname;
  let phoneNumber = document.register.phonenumber;
  let email = document.register.email;
  let carNumberPlate = document.register.carnumberplate;
  let password = document.register.password;
  let sex = document.register.sex;
  let NIN = document.register.ninname;
  let cPassword = document.register.confirm - password;

  // //   // picking error fields
  let firstNameError = document.getElementById("firstnameError");
  let lastNameError = document.getElementById("lastnameError");
  let emailError = document.getElementById("emailError");
  let errorCarNumberPlate = document.getElementById("gnameError");
  let phoneNumberError = document.getElementById("phonenumberError");
  let sexError = document.getElementById("qnameError");
  let ninError = document.getElementById("ninError");
  let passwordError = document.getElementById("passwordError");
  let cPasswordError = document.getElementById("cnameError");

  // //   // validating  firstname input
  // //   // validating for emptiness
  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "First name is required";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "first name must be at least 2 characters";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length > 20) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent =
      "first name must not be greater than 20 characters";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else {
    firstName.style.border = "2px solid green";
    firstNameError.textContent = "";
    lastName.focus();
  }

  // Validating the last name

  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "please provide your lastName";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length < 2) {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "first name must be at least 2 characters";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length > 15) {
    lastName.style.border = "2px solid red";
    lastNameError.textContent =
      "first name must not be greate than 15 characters";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else {
    lastName.style.border = "2px solid green";
    lastNameError.textContent = "";
    phoneNumber.focus();
  }

  // //   // validating phone number
  // let phoneRegex = /^[+][2][5][6][0-9]{9}$;/;
  let phoneRegex = /^\+256\d{9}$/;

  if (phoneNumber.value == "") {
    phoneNumber.style.border = "2px solid red";
    phoneNumberError.textContent = "please provide your phone number";
    phoneNumberError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    phoneNumber.focus();
    return false;
  } else if (!phoneRegex.test(phoneNumber.value)) {
    phoneNumber.style.border = "1px solid red";
    phoneNumberError.textContent = "Phone number should start with +256";
    phoneNumberError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phoneNumber.focus();
    return false;
  } else {
    phoneNumber.style.border = "1px solid green";
    phoneNumberError.textContent = "";
    email.focus();
  }

  //   // validation for Email
  if (email.value == "") {
    email.style.border = "1px solid red";
    emailError.textContent = "Email `is required";
    emailError.style =
      "color: red; font-size:11px; font-faxmily:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  }
  let EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value.match(EmailRegex)) {
    email.style.border = "1px solid red";
    emailError.textContent = "The email address should be valid";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  } else {
    email.style.border = "1px solid green";
    emailError.textContent = "";
    password.focus();
  }

  // Validating password
  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password is required";
    passwordError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    password.focus();
    return false;
  }
  if (password.value.length < 8) {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password must be at least 8 characters";
    passwordError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    password.focus();
    return false;
  } else {
    password.style.border = "1px solid green";
    passwordError.textContent = "";
    cPassword.focus();
  }

  // validating the confirm password
  

  // All validations passed
  










  

  // validate NIN
  //     if (NIN.value == "") {
  //       NIN.style.border = "1px solid red";
  //       ninError.textContent = "NIN is required";
  //       ninError.style =
  //         "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //       NIN.focus();
  //       return false;
  //     }
  //     let ninRegex = /^CF([a-zA-Z0-9]{12}+$)/;

  //     if (!NIN.value.match(ninRegex)) {
  //       NIN.style.border = "1px solid red";
  //       ninError.textContent = "NIN should be valid";
  //       ninError.style =
  //         "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //       NIN.focus();
  //       return false;
  //     }

  //     if (NIN.value == "") {
  //       NIN.style.border = "1px solid red";
  //       ninError.textContent = "NIN is required";
  //       ninError.style =
  //         "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //       NIN.focus();
  //       return false;
  //     }
  //     let ninRegex2 = /^CM([a-zA-Z0-9]{12}+$)/;

  //     if (!NIN.value.match(ninRegex)) {
  //       NIN.style.border = "1px solid red";
  //       ninError.textContent = "NIN should be valid";
  //       ninError.style =
  //         "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //       NIN.focus();
  //       return false;
      
}
