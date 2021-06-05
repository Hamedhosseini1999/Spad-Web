// Varibles
const nav = document.getElementById("nav");
const openBars = document.getElementById("open");
const body = document.querySelector("body");

// Event Listeners
openBars.addEventListener("click", () => {
  nav.classList.toggle("display");
  body.classList.toggle("display");
});
