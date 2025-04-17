document.addEventListener("DOMContentLoaded", () => {
  const menuElement = document.getElementById("menu");
  const ulMenu = document.getElementById("ulMenu");

  if (!menuElement || !ulMenu) {
    console.error("Menu or ulMenu element not found. Ensure the IDs are correct in the HTML.");
    return;
  }

  function menuToggle() {
    menuElement.classList.toggle("h-32");
  }

  window.addEventListener("resize", menuResize);

  function menuResize() {
    const window_size = window.innerWidth || document.body.clientWidth;
    if (window_size > 640) {
      menuElement.classList.remove("h-32");
    }
  }

  console.log("menu.js loaded successfully");
});