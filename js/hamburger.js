"use-strict";

const hamburgerEl = document.querySelector(".hamburger");
const hamburgerBtnEl = document.querySelector(".hamburger-container");
const navHamburgerEl = document.querySelector(".hamburger_nav_list");
const hamburgerCrossEl = document.querySelector(".hamburger_cross");
const hamburgerDropShadowEl = document.querySelector(".hamburger_drop_shadow");

const toggleHamMenuVisibility = () => {
    hamburgerEl.classList.toggle('modal_hidden');
    hamburgerEl.classList.toggle('ham_transition');
    hamburgerDropShadowEl.classList.toggle('modal_hidden');
};

hamburgerBtnEl.addEventListener("click", toggleHamMenuVisibility);
hamburgerDropShadowEl.addEventListener("click", toggleHamMenuVisibility);
hamburgerCrossEl.addEventListener("click", toggleHamMenuVisibility);

navHamburgerEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("li_item")) return;
    toggleHamMenuVisibility();
});