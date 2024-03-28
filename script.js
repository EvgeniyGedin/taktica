let buttonCatalog = document.querySelector(".header-lower-catalog");
let windowCatalog = document.querySelector(".header-lower-drop-down-window ");
let buttonAboutProduction = document.querySelector(
  ".header-upper-about-production"
);
let windowAboutProduction = document.querySelector(
  ".header-upper-about-production-window"
);

let windowsOpen = function (button, window) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    window.classList.toggle("invisible");
  });
  document.addEventListener("click", function (event) {
    // Проверяем, является ли целью события элемент списка или кнопки меню
    if (event.target !== button && event.target !== window) {
      // Если целью не является элемент списка или кнопка меню, то сворачиваем список
      window.classList.add("invisible");
    }
  });
};

windowsOpen(buttonCatalog, windowCatalog);
windowsOpen(buttonAboutProduction, windowAboutProduction);

let headerUpperAbout = document.querySelector(".header-upper-about-production");
let headerLower = document.querySelector(".header-lower");
let headerUpperr = document.querySelector(".header-upper");
let contacts = document.querySelector(".site-navigation-upper-contacts");
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    headerLower.classList.add("fixed");
    headerUpperr.classList.add("transition");
    contacts.classList.add("invisible");
    headerUpperAbout.classList.add("invisible");
  } else {
    headerLower.classList.remove("fixed");
    headerUpperr.classList.remove("transition");
    contacts.classList.remove("invisible");
    headerUpperAbout.classList.remove("invisible");
  }
};
let body = document.querySelector("body");
let mobHamburger = document.querySelector(".header-mob-hamburger");
let sidePanel = document.querySelector(".header-mob-side-panel");
let headerMobOverflou = document.querySelector(".header-mob-overflou");
mobHamburger.onclick = function (evt) {
  evt.preventDefault();
  sidePanel.classList.toggle("visible");
  headerMobOverflou.classList.toggle("visible");
  body.classList.add("overflow");
};

let lupa = document.querySelector(".header-side-panel-lupa");
lupa.onclick = function (evt) {
  evt.preventDefault();
  sidePanel.classList.toggle("visible");
  headerMobOverflou.classList.toggle("visible");
  body.classList.remove("overflow");
};
