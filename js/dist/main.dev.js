"use strict";

function mobile() {
  document.getElementById("menu").classList.toggle("menu-open");
}

var popup = document.querySelector(".popup");
window.onload = setTimeout(function () {
  return popup.classList.toggle("open");
}, 10000);
var close = document.querySelector(".close");

close.onclick = function () {
  popup.classList.remove("open");
};
//# sourceMappingURL=main.dev.js.map
