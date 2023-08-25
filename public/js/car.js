const Validate = () => {
  let firstName = document.car.firstname;
  let lastName = document.car.lastname;
  let model = document.car.model;
  let numberPlate = document.car.numberplate;
  let color = document.car.color;
  let date = document.car.date;
  let time = document.car.time;
  let slotnumber = document.car.slotnumber;

  let firstNameError = document.getElementById("firstnameError");
  let lastNameError = document.getElementById("lastnameError");
  let modelError = document.getElementById("modelError");
  let numberPlateError = document.getElementById("numberPlateError");
  let colorError = document.getElementById("colorError");
  let dateError = document.getElementById("dateError");
  let timeError = document.getElementById("timeError");
  let slotnumberError = document.getElementById("slotnumberError");

  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "please provide your firstname";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must be atleast 2 characters long";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  }

  let firstNameRegex = /^[A-Z][a-zA-Z]*$/
  if (!firstName.value.match(firstNameRegex)) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must start with a capital letter and should not have numbers";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  }
  else {
    firstName.style.border = "2px solid green";
    firstNameError.textContent = "";
    lastName.focus();
  }

  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "please provide your lastname";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length < 2) {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "Last name should be atleast 2 characters long";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.lenth > 15) {
    lastName.style.border = "1px solid red";
    lastNameError.textContent = "Last name should be more than 15 characters";
    lastNameError.style = "color: red; fontsize:11px; font-size:";
  } 
  
  let lastNameRegex = /^[A-Z][a-zA-Z]*$/
  if (!lastName.value.match(lastNameRegex)) {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "Last name must start with a capital letter and should not have numbers";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  }
  else {
    lastName.style.border = "2px solid green";
    lastNameError.textContent = "";

    model.focus();
  }

  if (model.value == "") {
    model.style.border = "2px solid red";
    modelError.textContent = "please provide your car model";
    modelError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    model.focus();
    return false;
  } else if (model.value.length < 2) {
    model.style.border = "2px solid red";
    modelError.textContent = "Model should be atleast 2 characters long";
    modelError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    model.focus();
    return false;
  } else {
    model.style.border = "2px solid green";
    modelError.textContent = "";
    numberPlate.focus();
  }
  if (numberPlate.value == "") {
    numberPlate.style.border = "2px solid red";
    numberPlateError.textContent = "please provide your car number plate";
    numberPlateError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    numberPlate.focus();
    return false;
  }

  let numberPlateRegex = /^U[A-Za-z0-9]{1,5}$/;
  if (!numberPlate.value.match(numberPlateRegex)) {
    numberPlate.style.border = "1px solid red";
    numberPlateError.textContent = "Number plate should be valid.";
    numberPlateError.style = "color: red; fontsize:11px; font-size:";
    numberPlate.focus();
    return false;
  } else {
    numberPlate.style.border = "2px solid green";
    numberPlateError.textContent = "";
    color.focus();
  }
  if (color.value == "") {
    color.style.border = "2px solid red";
    colorError.textContent = "please provide your car color";
    colorError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    color.focus();
    return false;
  } else if (color.value.length < 2) {
    color.style.border = "2px solid red";
    colorError.textContent = "Color should be atleast 2 characters long";
    colorError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    color.focus();
    return false;
  } else {
    color.style.border = "2px solid green";
    colorError.textContent = "";
    date.focus();
  }

  if (date.value == "") {
    date.style.border = "2px solid red";
    dateError.textContent = "please provide your date";
    dateError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    date.focus();
    return false;
  } else {
    date.style.border = "2px solid green";
    dateError.textContent = "";
    time.focus();
  }

  if (time.value == "") {
    time.style.border = "2px solid red";
    timeError.textContent = "please provide your time";
    timeError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    time.focus();
    return false;
  } else {
    time.style.border = "2px solid green";
    timeError.textContent = "";
    slotnumber.focus();
  }

  if (slotnumber.value == "") {
    slotnumber.style.border = "2px solid red";
    slotnumberError.textContent = "please provide your slot number";
    slotnumberError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    slotnumber.focus();
    return false;
  }
};
