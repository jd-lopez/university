//Hamburger menu

const menu = document.getElementById("menu");

const displayBtn = document.getElementById("displayBtn");
const hideBtn = document.getElementById("hideBtn");

const burgerContainer = document.getElementById("burgerContainer");

burgerContainer.addEventListener("click", (e) => {
  if (menu.classList.contains("translate-x-full")) {
    displayBtn.classList.toggle("hidden");
    hideBtn.classList.toggle("hidden");
    menu.classList.remove("translate-x-full", "opacity-0", "invisible");
    menu.classList.add("-translate-x-0", "opacity-100", "visible");
  } else {
    // Hide the menu
    hideBtn.classList.toggle("hidden");
    displayBtn.classList.toggle("hidden");
    menu.classList.add("translate-x-full", "opacity-0", "invisible");
    menu.classList.remove("-translate-x-0", "opacity-100", "visible");
  }
});

//hero Slider
const slider = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const bottomNav = document.getElementById("bottomNav");
const eachBottonNav = Array.from(bottomNav.children);
const slide = Array.from(slides);

let currentIndex = 0;

function updateSlide() {
  const offset = -(currentIndex * 100);
  slidesContainer.style.transform = `translateX(${offset}%)`;

  eachBottonNav.forEach((dot, index) => {
    dot.classList.toggle("md:currentSlide", index === currentIndex);
    dot.classList.toggle("bg-white", index === currentIndex);
  });
}

rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlide();
});

leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  updateSlide();
});

let sliderInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlide();
}, 5000);

eachBottonNav.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

///scroll animation

const animateScroll = document.querySelectorAll(".animateScroll");

//observer function

const scrollCallback = (entries, obeserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scrollTransition");
    } else {
      entry.target.classList.remove("scrollTransition");
    }
  });
};

const obeserver = new IntersectionObserver(scrollCallback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});

animateScroll.forEach((item) => obeserver.observe(item));

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       animateScroll.classList.add("scrollTransition");
//       return;
//     }
//     animateScroll.classList.remove("scrollTransition");
//   });
// });

// observer.observe(document.querySelector(".nextSection"));

//background changing effect

const slidingCard = document.querySelectorAll(".slidingCard");
const bgChangingSection = document.getElementById("bgChangingSection");

const backgrounds = ["firstBlue", "secondBlackBlue", "thirdBlackBlue"];

slidingCard.forEach((card, index) => {
  card.addEventListener("mouseover", () => {
    console.log(`Hovered over card ${index + 1}`);
    console.log(`Adding class: ${backgrounds[index]}`);

    bgChangingSection.classList.remove("bg-backBlue");
    bgChangingSection.classList.add(backgrounds[index]);

    console.log(backgrounds);
    console.log(typeof backgrounds[index]);
  });

  card.addEventListener("mouseleave", () => {
    bgChangingSection.classList.remove(backgrounds[index]);
    bgChangingSection.classList.add("bg-backBlue");
  });
});
