import { randomLetterFX } from "./letterRandomizer.js";
import { singleLetterRandomizer } from "./singleLetterRandomizer.js";

const Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
        modify(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  }
);

function modify(el) {
  if (el.classList.contains("about__main")) {
    el.classList.remove("hidden");
    el.classList.add("animatedSuFi");
  }
  if (el.classList.contains("portfolio__header-text")) {
    el.classList.remove("hidden");
    el.classList.add("animatedSrFi");
  }
}

////////////////////////////////////////
// Header
const headerName = document.getElementById("headerName");
const headerSub = document.getElementById("headerSub");

setTimeout(() => {
  randomLetterFX(headerName);
}, 750);

singleLetterRandomizer(headerSub);

////////////////////////////////////////
// About

const aboutSection = document.querySelector(".about__main");

Observer.observe(aboutSection);

////////////////////////////////////////
// Portfolio

const portfolioHeader = document.querySelector(".portfolio__header-text");

Observer.observe(portfolioHeader);
