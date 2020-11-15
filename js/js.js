document.querySelector(".burger").addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
  if (!document.querySelector("nav").classList.contains("active"))
    document.querySelector("nav").classList.add("notactive");
  else document.querySelector("nav").classList.remove("notactive");
});
window.addEventListener("resize", (e) => {
  document.querySelector("nav").classList.remove("notactive");
});
