const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const observer2 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) => {
    if (entry2.isIntersecting) {
      imgContains.forEach((contain) => {
        contain.classList.remove("active");
      });
    }
  });
});

const pageSections = document.querySelectorAll(".section");
const imgContains = document.querySelectorAll(".img-contain");
const gallery = document.querySelector(".gallery");
pageSections.forEach((section) => observer.observe(section));
observer2.observe(gallery);

const hamburger = document.querySelector(".navigation__hamburger");
const navRight = document.querySelector(".navigation__right");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".navigation__link");

hamburger.addEventListener("click", () => {
  navRight.classList.toggle("active");
  overlay.classList.toggle("active");

  if (navRight.classList.contains("active")) {
    gsap
      .timeline()
      .from(".navigation__item-container", {
        duration: 1,
        y: 40,
        opacity: 0,
      })
      .from(".navigation__cta", {
        x: 70,
        opacity: 0,
        duration: 0.5,
        ease: "back",
      });
  }
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navRight.classList.remove("active");
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  navRight.classList.remove("active");
  overlay.classList.remove("active");
});

/////////////////////////
/////////////////////////
// ANIMATION FOR HERO SECTION
// gsap
//   .timeline()
//   .from(".hero__typography", {
//     opacity: 0,
//     x: -500,
//     duration: 1,
//   })
//   .from(".hero__image", {
//     opacity: 0,
//     y: 400,
//     delay: -0.5,
//     duration: 1,
//   });
