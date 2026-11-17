const sun = document.getElementById("sun");
const menu = document.getElementById("menu");

sun.addEventListener("click", () => {
  sun.classList.toggle("open");
  menu.classList.toggle("open");
});
