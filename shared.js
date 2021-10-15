var backdrop = document.querySelector(".backdrop");
var modalDialog = document.querySelector(".modal");
var modalCloseButton =
  modalDialog &&
  modalDialog.querySelector(".modal__action.modal__action--negative");
var choosePlanButtons = document.querySelectorAll(".plan button") || [];

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < choosePlanButtons.length; i++) {
  choosePlanButtons[i].addEventListener("click", function (e) {
    //modalDialog.style.display = "block";
    //backdrop.style.display = "block";
    modalDialog.classList.add("open");
    backdrop.classList.add("open");
  });
}

function closeModal(e) {
  //modalDialog.style.display = "none";
  //backdrop.style.display = "none";
  modalDialog && modalDialog.classList.remove("open");
  backdrop && backdrop.classList.remove("open");
  mobileNav && mobileNav.classList.remove("open");
}

modalCloseButton && modalCloseButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

toggleButton &&
  toggleButton.addEventListener("click", function (e) {
    backdrop && backdrop.classList.add("open");
    mobileNav && mobileNav.classList.add("open");
  });
