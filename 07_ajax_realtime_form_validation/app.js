var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var usernameStatus = document.getElementById("usernameStatus");
var emailStatus = document.getElementById("emailStatus");
var formStatus = document.getElementById("formStatus");

var takenUsernames = ["admin", "test", "devang", "student1"];

usernameInput.addEventListener("input", function () {
  var value = usernameInput.value.trim();

  if (value.length < 3) {
    usernameStatus.textContent = "Username must be at least 3 characters.";
    return;
  }

  simulateAjaxUsernameCheck(value).then(function (isAvailable) {
    usernameStatus.textContent = isAvailable
      ? "Username is available."
      : "Username is already taken.";
  });
});

emailInput.addEventListener("input", function () {
  var value = emailInput.value.trim();
  var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  emailStatus.textContent = valid ? "Valid email format." : "Please enter a valid email.";
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var userOk = usernameStatus.textContent === "Username is available.";
  var emailOk = emailStatus.textContent === "Valid email format.";

  if (userOk && emailOk) {
    formStatus.textContent = "Form submitted successfully.";
  } else {
    formStatus.textContent = "Please fix the form errors before submission.";
  }
});

function simulateAjaxUsernameCheck(username) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var isAvailable = !takenUsernames.includes(username.toLowerCase());
      resolve(isAvailable);
    }, 350);
  });
}
