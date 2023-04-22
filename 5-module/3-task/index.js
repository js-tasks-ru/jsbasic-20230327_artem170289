function initCarousel() {
  let carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselArrowRight = document.querySelector(".carousel__arrow_right");
  let caruselTarget = document.querySelector(".carousel__inner");

  let count = 0;

  if (count == 0) carouselArrowLeft.style.display = "none";
  carouselArrowRight.addEventListener("click", () => {
    count++;
    caruselTarget.style.transform = `translateX(-${
      caruselTarget.offsetWidth * count
    }px)`;
    if (count > 0) carouselArrowLeft.style.display = "";
    if (count == 3) carouselArrowRight.style.display = "none";
  });

  carouselArrowLeft.addEventListener("click", () => {
    count--;
    caruselTarget.style.transform = `translateX(-${
      caruselTarget.offsetWidth * count
    }px)`;

    if (count == 0) carouselArrowLeft.style.display = "none";
    if (count < 3) carouselArrowRight.style.display = "";
  });
}
