//simple email validation
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#password-input");
const submitBtn = document .querySelector("#submit-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
}

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}
passInput.onkeyup = () => {
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
}

submitBtn.onclick = () => {

  if(firstNameInput.value === ""){
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
  }

  if(lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
  }

  if(emailInput.value === ""){
    emailInput.classList.add("is-invalid");
  } else if(validateEmail(emailInput.value) == true){
    emailInput.classList.add("is-valid");
  } else if(validateEmail(emailInput.value) == false){
    emailInput.classList.add("is-invalid");
  } 

  if(passInput.value === ""){
    passInput.classList.add("is-invalid");
  }else if(passInput.value.length < 6){
    passInput.classList.add("is-invalid");
  } else {
    passInput.classList.add("is-valid");
  }





};