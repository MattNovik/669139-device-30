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
  if (!modalName.value || !modalEmail.value || modalTextmail.value) {
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

/*JS for slider */

const slider = document.querySelector(".slider");
const sliderFirst = slider.querySelector(".slider-first");
const sliderSecond = slider.querySelector(".slider-second");
const sliderThird = slider.querySelector(".slider-third");
const switchFirst = document.querySelector(".switch-first");
const switchSecond = document.querySelector(".switch-second");
const switchThird = document.querySelector(".switch-third");

switchFirst.addEventListener("click",function (evt) {
  evt.preventDefault;
  if (switchSecond.classList.contains("slider-open")){
    switchSecond.classList.remove("slider-open");
  } else if (switchThird.classList.contains("slider-open")){
    switchThird.classList.remove("slider-open");
  }
  switchFirst.classList.add("slider-open");
  if (!sliderSecond.classList.contains("hide")) {
    sliderSecond.classList.add("hide");
  }
  if (!sliderThird.classList.contains("hide")) {
    sliderThird.classList.add("hide");
  }
  sliderFirst.classList.remove("hide");
});
switchSecond.addEventListener("click",function (evt) {
  evt.preventDefault;
  if (switchFirst.classList.contains("slider-open")){
    switchFirst.classList.remove("slider-open");
  } 
  if (switchThird.classList.contains("slider-open")){
    switchThird.classList.remove("slider-open");
  }
  switchSecond.classList.add("slider-open");
  if (!sliderFirst.classList.contains("hide")) {
    sliderFirst.classList.add("hide");
  }
  if (!sliderThird.classList.contains("hide")) {
    sliderThird.classList.add("hide");
  }
  sliderSecond.classList.remove("hide");
});
switchThird.addEventListener("click",function (evt) {
  evt.preventDefault;
  if (switchSecond.classList.contains("slider-open")){
    switchSecond.classList.remove("slider-open");
  } else if (switchFirst.classList.contains("slider-open")){
    switchFirst.classList.remove("slider-open");
  }
  switchThird.classList.add("slider-open");
  if (!sliderFirst.classList.contains("hide")) {
    sliderFirst.classList.add("hide");
  }
  if (!sliderSecond.classList.contains("hide")) {
    sliderSecond.classList.add("hide");
  }
  sliderThird.classList.remove("hide");  
});