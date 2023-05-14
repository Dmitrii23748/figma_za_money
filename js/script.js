const stepOne = document.querySelector(".step__item-1");
const stepThree = document.querySelector(".step__item-3");

const showBlock = (elem) => {
  const posTop = elem.getBoundingClientRect().top;
  elem.classList.toggle(
    "show",
    posTop + elem.clientHeight <= window.innerHeight && posTop >= 0
  );
};

document.addEventListener("scroll", () => {
  if (window.innerWidth >= 1280) {
    showBlock(stepOne);
    showBlock(stepThree);
  }
});
