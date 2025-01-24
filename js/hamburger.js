"use-strict";

const hamburgerEl = document.querySelector(".hamburger");
const hamburgerBtnEl = document.querySelector(".hamburger-container");
const navHamburgerEl = document.querySelector(".hamburger_nav_list");
const hamburgerCrossEl = document.querySelector(".hamburger_cross");
const hamburgerDropShadowEl = document.querySelector(".hamburger_drop_shadow");

const toggleHamMenuVisibility = () => {
    // Toggle the visibility of the hamburger menu and its backdrop
    hamburgerEl.classList.toggle('modal_hidden');
    hamburgerEl.classList.toggle('ham_transition');
    hamburgerDropShadowEl.classList.toggle('modal_hidden');

    // Toggle 'active' class on the hamburger button
    hamburgerBtnEl.classList.toggle('active');
    hamburgerCrossEl.classList.toggle('active');
};

// Event listener to open/close the menu when clicking the hamburger button
hamburgerBtnEl.addEventListener("click", toggleHamMenuVisibility);

// Event listener to close the menu when clicking the backdrop (drop shadow)
hamburgerDropShadowEl.addEventListener("click", toggleHamMenuVisibility);

// Event listener to close the menu when clicking the cross button
hamburgerCrossEl.addEventListener("click", toggleHamMenuVisibility);

// Close the menu when clicking on any item inside the navigation list
navHamburgerEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("li_item")) return;
    toggleHamMenuVisibility();
});
