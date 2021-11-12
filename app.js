const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const testimonials = document.querySelectorAll(".testimonial");

let index = 0;
window.addEventListener("DOMContentLoaded", function () {
  show(index);
});
function show(index) {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none";
  });
  testimonials[index].style.display = "flex";
}

nextBtn.addEventListener("click", function () {
  index++;
  if (index > testimonials.length - 1) {
    index = 0;
  }
  show(index);
});

prevBtn.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = testimonials.length - 1;
  }
  show(index);
});
