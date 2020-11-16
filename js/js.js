const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
burger.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  if (!nav.classList.contains("active")) nav.classList.add("notactive");
  else nav.classList.remove("notactive");
});
window.addEventListener("resize", (e) => {
  nav.classList.remove("notactive");
});
