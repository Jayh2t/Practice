const slideContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

let activePage = 0;

btnLeft.addEventListener("click", () => {
  activePage = activePage > 0 ? activePage - 1 : 0;
  slideContainer.style.transform = `translate(-${activePage * 25}%)`;
  dots.forEach((ele) => ele.classList.remove("active"));
  dots[activePage].classList.add("active");
});

btnRight.addEventListener("click", () => {
  activePage =
    activePage < slides.length - 1 ? activePage + 1 : slides.length - 1;
  slideContainer.style.transform = `translate(-${activePage * 25}%)`;
  dots.forEach((ele) => ele.classList.remove("active"));
  dots[activePage].classList.add("active");
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activePage = index;
    slideContainer.style.transform = `translate(-${activePage * 25}%)`;
    dots.forEach((ele) => ele.classList.remove("active"));
    dot.classList.add("active");
  });
});
