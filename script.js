const form = document.querySelector("form");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const check = document.getElementById("check");
const radios = document.querySelectorAll('input[name="radio"]');

const radioError = document.querySelector(".radio-error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // reset errors
  document.querySelectorAll(".error").forEach(el => {
    el.classList.remove("show-error");
  });

  document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(el => {
    el.classList.remove("input-error");
  });

  // First Name
  if (fname.value.trim() === "") {
    fname.classList.add("input-error");
    fname.nextElementSibling.classList.add("show-error");
    valid = false;
  }

  // Last Name
  if (lname.value.trim() === "") {
    lname.classList.add("input-error");
    lname.nextElementSibling.classList.add("show-error");
    valid = false;
  }

  // Email
  if (email.value.trim() === "") {
    email.classList.add("input-error");
    email.nextElementSibling.textContent = "This field is required";
    email.nextElementSibling.classList.add("show-error");
    valid = false;
  } else if (!email.value.includes("@")) {
    email.classList.add("input-error");
    email.nextElementSibling.textContent = "Please enter a valid email";
    email.nextElementSibling.classList.add("show-error");
    valid = false;
  }

  // Radio
  let radioChecked = false;
  radios.forEach(r => {
    if (r.checked) radioChecked = true;
  });

  if (!radioChecked) {
    radioError.classList.add("show-error");
    valid = false;
  }

  // Message
  if (message.value.trim() === "") {
    message.classList.add("input-error");
    message.nextElementSibling.classList.add("show-error");
    valid = false;
  }

  // Checkbox
  if (!check.checked) {
    check.parentElement.nextElementSibling.classList.add("show-error");
    valid = false;
  }

  // Success
  if (valid) {
    const popup = document.getElementById("popup");

    popup.classList.add("show");

    setTimeout(() => {
    popup.classList.remove("show");
    }, 3000);
    form.reset();
  }
});