let buttonCatalog = document.querySelector(".header-lower-catalog");
let windowCatalog = document.querySelector(".header-lower-drop-down-window ");
let buttonAboutProduction = document.querySelector(
  ".header-upper-about-production"
);
let windowAboutProduction = document.querySelector(
  ".header-upper-about-production-window"
);

let windowsOpen = function (button, window) {
  button.onclick = function (evt) {
    evt.preventDefault();
    window.classList.toggle("invisible");
  };
};

windowsOpen(buttonCatalog, windowCatalog);
windowsOpen(buttonAboutProduction, windowAboutProduction);

document.addEventListener("click", function (event) {
  console.log(event.target);
  // Проверяем, является ли целью события элемент списка или кнопки меню
  if (event.target !== buttonCatalog && event.target !== windowCatalog) {
    console.log(windowCatalog);
    // Если целью не является элемент списка или кнопка меню, то сворачиваем список
    windowCatalog.classList.add("invisible");
  }
});
