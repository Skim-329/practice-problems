var contactForm = document.querySelector("#contact-form");

function submitEvent(event) {
  event.preventDefault();
  var formResponses = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value,
  };
  console.log("results:", formResponses);
  contactForm.reset();
}

contactForm.addEventListener("submit", submitEvent);
