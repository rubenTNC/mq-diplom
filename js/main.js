function mobile() {
    document.getElementById("menu").classList.toggle("menu-open");
}

let popup = document.querySelector(".popup");
window.onload =  setTimeout(() => popup.classList.toggle("open"), 10000);

let close = document.querySelector(".close");

close.onclick = function() {
    popup.classList.remove("open")
}

