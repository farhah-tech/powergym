// inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const msg = document.getElementById("msg");

// magaca (ugu badnaan 11 xaraf)
nameInput.addEventListener("input", () => {
  if (nameInput.value.length <= 11 && nameInput.value.length > 0) {
    nameInput.style.border = "2px solid green";
  } else {
    nameInput.style.border = "2px solid red";
  }
});

// email example@gmail.com
emailInput.addEventListener("input", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.style.border = "2px solid green";
  } else {
    emailInput.style.border = "2px solid red";
  }
});

// phone 25261*******
phoneInput.addEventListener("input", () => {
  const phonePattern = /^25261\d{7}$/;
  if (phonePattern.test(phoneInput.value)) {
    phoneInput.style.border = "2px solid green";
  } else {
    phoneInput.style.border = "2px solid red";
  }
});

// password (ugu yaraan 8 xaraf)
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length >= 8) {
    passwordInput.style.border = "2px solid green";
  } else {
    passwordInput.style.border = "2px solid red";
  }
});

// show / hide password
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

// login
function login() {
  if (
    nameInput.value.length <= 11 &&
    nameInput.value.length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) &&
    ageInput.value >= 18 &&
    /^25261\d{7}$/.test(phoneInput.value) &&
    passwordInput.value.length >= 8
  ) {
    document.getElementById("loginsection").style.display = "none";
    document.getElementById("site").style.display = "block";
  } else {
    msg.innerText = "Fadlan hubi xogta aad gelisay";
    msg.style.color = "red";
  }
}

// logout
function logout() {
  document.getElementById("site").style.display = "none";
  document.getElementById("loginsection").style.display = "flex";
}

// contact (fariin fudud)
function sendmsg() {
  document.getElementById("Contactmsg").innerText =
    "Fariinta waa la helay, mahadsanid";
}
