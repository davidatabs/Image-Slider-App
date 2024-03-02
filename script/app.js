let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slider = document.querySelector(".slider");

prev.addEventListener("click", () => {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

next.addEventListener("click", () => {
  let slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});
