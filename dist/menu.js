// Getting hamburger menu in small screens
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

if (!menu || !ulMenu) {
  console.error("Menu or ulMenu element not found. Ensure the IDs are correct in the HTML.");
}

function menuToggle() {
  if (menu) {
    menu.classList.toggle("h-32");
    console.log("Menu toggled. Current classes:", menu.className);
  }
}

// Browser resize listener
window.addEventListener("resize", menuResize);

// Resize menu if user changes the width with responsive menu opened
function menuResize() {
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640 && menu) {
    menu.classList.remove("h-32");
    console.log("Menu resized. Current classes:", menu.className);
  }
}