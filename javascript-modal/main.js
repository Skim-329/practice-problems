var openModalButton = document.querySelector(".openModal");
var closeModalButton = document.querySelector(".closeModal");
var modal = document.querySelector(".modal");

openModalButton.addEventListener("click", function (event) {
  if (event.target === openModalButton) {
    modal.className = "model-open";
  }
});

closeModalButton.addEventListener("click", function (event) {
  if (event.target === closeModalButton) {
    modal.className = "modal";
  }
});
