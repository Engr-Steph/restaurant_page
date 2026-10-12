import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const contactButton = document.querySelector("#contactBtn");

function clearContent() {
    content.innerHTML = "";
}

homeButton.addEventListener("click", function () {
    clearContent();
    loadHomePage();
});

menuButton.addEventListener("click", function () {
    clearContent();
    loadMenuPage();
});

contactButton.addEventListener("click", function () {
    clearContent();
    loadContactPage();
});

loadHomePage();