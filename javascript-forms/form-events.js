function handleFocus(event) {
  console.log("focus event was fired.");
  console.log("Event target:", event.target.name);
}

function handleBlur(event) {
  console.log("blur event was fired");
  console.log(event.target.name);
}

function handleInput(event) {
  console.log("Value of", event.target.name, ":", event.target.value);
}

var nameField = document.querySelector("#user-name");
var emailField = document.querySelector("#user-email");
var messageField = document.querySelector("#user-message");

nameField.addEventListener("focus", handleFocus);
nameField.addEventListener("blur", handleBlur);
nameField.addEventListener("input", handleInput);

emailField.addEventListener("focus", handleFocus);
emailField.addEventListener("blur", handleBlur);
emailField.addEventListener("input", handleInput);

messageField.addEventListener("focus", handleFocus);
messageField.addEventListener("blur", handleBlur);
messageField.addEventListener("input", handleInput);
