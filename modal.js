/*JS for modalWindow*/
const modalLink = document.querySelector(".open-modal");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".wrapper-close");
const modalForm = modalPopup.querySelector(".modal-form");
const modalName = modalPopup.querySelector(".modal-form-name");
const modalEmail = modalPopup.querySelector(".modal-form-email");
const modalTextmail = modalPopup.querySelector(".modal-form-textmail");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("visible");
  
  if (storageName & storageEmail) {
    modalName.value = storageName;
    modalEmail.value = storageEmail;
    modalTextmail.focus();
  } else if (storageName){
    modalEmail.focus();
  } else {
    modalName.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("visible");
  modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalEmail.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", modalName.value);
      localStorage.setItem("email", modalEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("visible")) {
      evt.preventDefault();
      modalPopup.classList.remove("visible");
      modalPopup.classList.remove("modal-error");
    }
  }
});

/*JS for modalMap*/

const modalMapOpen = document.querySelector(".map");
const modalMap = document.querySelector(".modal-map")
const modalMapClose = modalMap.querySelector(".wrapper-close");

modalMapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("visible");
});

modalMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("visible");
});