const dots = document.querySelectorAll(".dot");
const slides = document.querySelector(".slides");

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    dots.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    slides.style.transform = `translate(-${index * 25}%)`;
  });
});
