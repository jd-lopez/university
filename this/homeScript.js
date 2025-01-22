//Hamburger menu

const menu = document.getElementById("menu");

const displayBtn = document.getElementById("displayBtn");
const hideBtn = document.getElementById("hideBtn");

const burgerContainer = document.getElementById("burgerContainer");

burgerContainer.addEventListener("click", (e) => {
  if (menu.classList.contains("translate-x-full")) {
    displayBtn.classList.toggle("hidden");
    hideBtn.classList.toggle("hidden");
    menu.classList.remove("translate-x-full", "opacity-0", "invisible");
    menu.classList.add("-translate-x-0", "opacity-100", "visible");
  } else {
    // Hide the menu
    hideBtn.classList.toggle("hidden");
    displayBtn.classList.toggle("hidden");
    menu.classList.add("translate-x-full", "opacity-0", "invisible");
    menu.classList.remove("-translate-x-0", "opacity-100", "visible");
  }
});
