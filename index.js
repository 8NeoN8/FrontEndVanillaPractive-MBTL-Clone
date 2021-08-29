let screenLoad = document.getElementById("load-wrapper");
let promo = document.getElementById("promoSection");
let page = document.getElementById("page");

window.onload = (event) => {
  page.classList.add("overflow-y-hidden");

  setTimeout(function loadingScreenFade() {
    screenLoad.classList.add("fade-off");
  }, 2500);
  setTimeout(function loadingScreenEnd() {
    screenLoad.style.display = "none";
    page.classList.remove("overflow-y-hidden");
  }, 3150);
};

const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrolllAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

let throttleTimer = false;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

window.addEventListener("scroll", () => {
  throttle(handleScrolllAnimation, 250);
});
