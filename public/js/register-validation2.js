// const Validate = () => {
//   // picking input fields with their names
//   let firstName = document.register.firstname;
//   let lastName = document.register.lastname;
//   let email = document.register.email;
//   let carNumberPlate = document.register.carnumberplate;
//   let phoneNumber = document.register.phonenumber;
//   let sex = document.register.sex;
//   let NIN = document.register.ninname;

//   // picking error fields
//   let firstNameError = document.getElementById("firstnameError");
//   let lastNameError = document.getElementById("lastnameError");
//   let emailError = document.getElementById("pnameError");
//   let errorCarNumberPlate = document.getElementById("gnameError");
//   let phoneNumberError = document.getElementById("phonenumberError");
//   let sexError = document.getElementById("qnameError");
//   let ninError = document.getElementById("ninError");

//   // validating  firstname input
//   // validating for emptiness
//   if (firstName.value == "") {
//     firstName.style.border = "2px solid red";
//     firstNameError.textContent = "please provide your firstname";
//     firstNameError.style =
//       "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
//     firstName.focus();
//     Error++;
//   }
//    else if (firstName.value.length < 2) {
//     firstName.style.border = "2px solid red";
//     firstNameError.textContent = "first name must be at least 2 characters";
//     firstNameError.style =
//       "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
//     firstName.focus();
//     Error++;
//   } 
//   else if (firstName.value.length > 15) {
//     firstName.style.border = "2px solid red";
//     firstNameError.textContent =
//       "first name must not be greate than 15 characters";
//     firstNameError.style =
//       "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
//     firstName.focus();
//     Error++;
//   }
//    else {
//     firstName.style.border = "2px solid green";
//     firstNameError.textContent = "";
//     lastName.focus();
//   }

//   // validating phone number

//   if (phoneNumber.value == "") {
//     phoneNumber.style.border = "2px solid red";
//     phoneNumberError.textContent = "please provide your phone number";
//     phoneNumberError.style =
//       "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
//     phoneNumber.focus();
//     Error++;
//   }
//   // /^\+256\d{9}$/
  
//   let phoneRegex =  /^[+][2][5][6][0-9]{9}$;/;
   

//   if (!phoneRegex.test(phoneNumber.value)) {
//     phoneNumber.style.border = "1px solid red";
//     phoneNumberError.textContent = "Phone number should start with +256";
//     phoneNumberError.style =
//       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
//     phoneNumber.focus();
//     Error++;
//   }
//   // validation for Email
// //   if (email.value == "") {
// //     email.style.border = "1px solid red";
// //     emailError.textContent = "Email `is required";
// //     emailError.style =
// //       "color: red; font-size:11px; font-faxmily:helvetica,Arial,sans-serif;";
// //     email.focus();
// //     error++;
// //   }
// //   let EmailRegex =
// //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// //   if (!email.value.match(EmailRegex)) {
// //     email.style.border = "1px solid red";
// //     emailError.textContent = "The email address should be valid";
// //     emailError.style =
// //       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
// //     email.focus();
// //     error++;
// //   }

// //   // validate NIN
// //   if (NIN.value == "") {
// //     NIN.style.border = "1px solid red";
// //     ninError.textContent = "NIN is required";
// //     ninError.style =
// //       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
// //     NIN.focus();
// //     error++;
// //   }
// //   let ninRegex = /^CF([a-zA-Z0-9]{12}+$)/;

// //   if (!NIN.value.match(ninRegex)) {
// //     NIN.style.border = "1px solid red";
// //     ninError.textContent = "NIN should be valid";
// //     ninError.style =
// //       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
// //     NIN.focus();
// //     error++;
// //   }

// //   if (NIN.value == "") {
// //     NIN.style.border = "1px solid red";
// //     ninError.textContent = "NIN is required";
// //     ninError.style =
// //       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
// //     NIN.focus();
// //     error++;
// //   }
// //   let ninRegex2 = /^CM([a-zA-Z0-9]{12}+$)/;

// //   if (!NIN.value.match(ninRegex)) {
// //     NIN.style.border = "1px solid red";
// //     ninError.textContent = "NIN should be valid";
// //     ninError.style =
// //       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
// //     NIN.focus();
// //     error++;
// //   }
// if(error>0) {
//   event.preventDefault();
// }
// }
