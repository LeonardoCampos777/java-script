const btnNext = document.querySelector("#nextSlide");
const btnPrevious = document.querySelector("#previousSlide");
const slider = document.querySelector(".slider");
const content = document.querySelector(".content");

const { width: sliderWidth } = window.getComputedStyle(slider);
const { width: contentWidth } = window.getComputedStyle(content);

const sliderProps = {
  width: parseInt(sliderWidth),
  scroll: 0,
};

let currentSlide = 0;

function setCurrentSlide() {
  const dots = document.querySelectorAll(".dot");
  for (let dot of dots) {
    dot.classList.remove("current");
  }
  dots[currentSlide].classList.add("current");
}
setCurrentSlide();

function controlSlide({ target: { id } }) {
  switch (id) {
    case "nextSlide": {
      const contentLength = content.children.length;
      if (sliderProps.scroll + sliderProps.width < parseInt(contentWidth)) {
        sliderProps.scroll += sliderProps.width;
      }
      if (currentSlide < contentLength - 1) {
        currentSlide += 1;
        setCurrentSlide();
      }
      return (slider.scrollLeft = sliderProps.scroll);
    }

    case "previousSlide": {
      sliderProps.scroll =
        sliderProps.scroll - sliderProps.width < 0
          ? 0
          : sliderProps.scroll - sliderProps.width;

      if (currentSlide > 0) {
        currentSlide -= 1;
        setCurrentSlide();
      }
      return (slider.scrollLeft = sliderProps.scroll);
    }
  }
}

window.onload = () => {
  const contentLength = content.children.length;
  for (let index = 0; index < contentLength - 1; index++) {
    const newDot = slider.parentElement.querySelector(".dot").cloneNode();
    slider.parentElement.querySelector(".length-dots").appendChild(newDot);
  }
  setCurrentSlide();
};

btnNext.addEventListener("click", controlSlide);
btnPrevious.addEventListener("click", controlSlide);
