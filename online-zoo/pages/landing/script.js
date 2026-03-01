const navbar = document.querySelector(".nav");
const crossBtn = document.querySelector(".cross-button");
const menuBtn = document.querySelector(".menu-button");

crossBtn.addEventListener("click", function (e) {
  navbar.style.display = "none";
});

menuBtn.addEventListener("click", function (e) {
  navbar.style.display = "block";
});
