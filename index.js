const sidemenu = document.querySelector(".sidemenu");
const sidemenuOverlay = document.querySelector(".sidemenu__overlay");

const toggleBtn = document.querySelector(".btn_label_toggle");

function toggleSidemenu() {
    const isClosed = sidemenu.classList.contains("sidemenu_hidden");

    sidemenu.classList.toggle("sidemenu_hidden");

    toggleBtn.setAttribute("aria-expanded", isClosed ? "true" : "false");
}

sidemenuOverlay.addEventListener("click", toggleSidemenu);
toggleBtn.addEventListener("click", toggleSidemenu);
