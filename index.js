const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
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
const paragraphs = document.querySelectorAll(".paragraph__anim");
const aboutDescrip1 = document.querySelector(".about__descrip-1");
const aboutDescrip2 = document.querySelector(".about__descrip-2");
const about1 = new SplitType(".about__descrip-1");
const about2 = new SplitType(".about__descrip-2");
let about1Shown = false;
let about2Shown = false;

const observeAbout1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const tl = gsap.timeline();
    if (entry.isIntersecting && !about1Shown) {
      gsap.from(about1.words, {
        y: "100%",
        opacity: 0,
        stagger: 0.04,
        // delay: 0.3,
      });

      about1Shown = true;
    }
  });
});

const observeAbout2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const tl = gsap.timeline();

    if (entry.isIntersecting && !about2Shown) {
      gsap.from(about2.words, {
        y: "100%",
        opacity: 0,
        stagger: 0.04,
        // delay: 0.3,
      });

      about2Shown = true;
    }
  });
});

// observeAbout1.observe(aboutDescrip1);
// observeAbout2.observe(aboutDescrip2);

gsap.registerPlugin(ScrollTrigger);

gsap.from(about1.words, {
  y: "100%",
  opacity: 0,
  stagger: 0.04,
  scrollTrigger: ".about__descrip-1",
});
gsap.from(about2.words, {
  y: "100%",
  opacity: 0,
  stagger: 0.04,
  scrollTrigger: ".about__descrip-2",
});

// GSAP FOR ANIMATIONS ON LOAD

// ABOUT US LOAD
// gsap.from(".about", {
//   y: 230,
//   opacity: 0,
//   duration: 1,
//   ease: "ease",
//   scrollTrigger: ".about",
// });

// // POPULAR WEEK LOAD
// gsap.from(".popularWeek", {
//   y: 230,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: ".popularWeek",
// });

// // MODELS LOAD
// gsap.from(".models", {
//   y: 230,
//   opacity: 0,
//   duration: 1,
//   ease: "ease",
//   scrollTrigger: ".models",
// });

// // GALLERY LOAD
// gsap.from(".gallery", {
//   y: 230,
//   opacity: 0,
//   duration: 1,
//   ease: "ease",
//   scrollTrigger: ".gallery",
// });

// // SUBSCRIBE LOAD
// gsap.from(".subscribe", {
//   y: 230,
//   opacity: 0,
//   duration: 1,
//   ease: "ease",
//   scrollTrigger: ".subscribe",
// });

const pageSections = document.querySelectorAll(".section");
const imgContains = document.querySelectorAll(".img-contain");
const gallery = document.querySelector(".gallery");
pageSections.forEach((section) => observer.observe(section));
observer2.observe(gallery);

const hamburger = document.querySelector(".navigation__hamburger");
const navRight = document.querySelector(".navigation__right");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".navigation__link");
const navCtaLink = document.querySelector(".navigation__cta-link");
let navOpen = false;

function toggleNav() {
  let burgerPos;
  let navWidth;

  if (window.screen.width <= 400) {
    burgerPos = "55%";
    navWidth = "75%";
  } else if (window.screen.width <= 500) {
    burgerPos = "50%";
    navWidth = "55%";
  } else if (window.screen.width <= 850) {
    burgerPos = "40%";
    navWidth = "50%";
  } else if (window.screen.width > 850) {
    navWidth = "60%";
    burgerPos = "50%";
  }

  gsap.to(".navigation__hamburger", {
    right: burgerPos,
  });

  if (navOpen) {
    gsap
      .timeline()
      .to(".navigation__item-container", {
        duration: 0.4,
        y: 20,
        opacity: 0,
        stagger: 0.15,
        ease: "ease",
      })
      .to(".navigation__cta", {
        x: 70,
        opacity: 0,
        duration: 0.5,
        ease: "back",
        delay: -0.1,
      })
      .to(".navigation__right", {
        opacity: 0,
        width: "0%",
        delay: -0.5,
      })
      .to(".navigation__hamburger", {
        right: "0%",
        delay: -0.6,
      });
  }

  if (navRight.classList.contains("active") && !navOpen) {
    gsap
      .timeline()
      .to(".navigation__right", {
        opacity: 1,
        width: navWidth,
      })
      .to(".navigation__item-container", {
        duration: 0.4,
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "ease-in",
      })
      .to(".navigation__cta", {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back",
      });
  }

  navOpen = true;

  if (!navRight.classList.contains("active")) {
    navOpen = false;
  }
}

// hamburger animation
hamburger.addEventListener("click", () => {
  navRight.classList.toggle("active");
  overlay.classList.toggle("active");
  toggleNav();
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navRight.classList.remove("active");
    overlay.classList.remove("active");
    toggleNav();
  });
});

navCtaLink.addEventListener("click", () => {
  navRight.classList.remove("active");
  overlay.classList.remove("active");
  toggleNav();
});

overlay.addEventListener("click", () => {
  navRight.classList.remove("active");
  overlay.classList.remove("active");
  toggleNav();
});

/////////////////////////
/////////////////////////
// ANIMATION FOR HERO SECTION

const myText = new SplitType(".hero__descrip");

gsap.from(myText.words, {
  y: "100%",
  opacity: 0,
  stagger: 0.04,
  scrollTrigger: ".hero__descrip",
});

// realWordAnim = new SplitType(".word__anim");
// gsap.registerPlugin(ScrollTrigger);
// gsap.from(realWordAnim, {
//   scrollTrigger: realWordAnim,
//   y: "100%",
//   opacity: 0,
//   stagger: 0.04,
// });

// const handleIntersection = (entries) => {
//   entries.map((entry) => {
//     realParagraph = entry.target.querySelector(".word__anim");
//     realWordAnim = new SplitType(realParagraph);

//     console.log(realParagraph);
//     const tl = gsap.timeline();

//     tl.from(realWordAnim.words, {
//       y: "100%",
//       opacity: 0,
//       stagger: 0.04,
//     });

//     if (entry.isIntersecting) {
//       tl.play(0);
//     } else {
//       tl.reverse();
//     }
//   });
// };

// const observerWords = new IntersectionObserver(handleIntersection, {
//   threshold: 0.5,
// });
// console.log(entriesWords);

// entriesWords.forEach((entryWord) => {
//   console.log(entryWord);

//   realParagraph = entryWord.target.querySelector(".word__anim");

//   realWordAnim = new SplitType(realParagraph);

//   if (entryWord.isIntersecting && !wordShown) {
//     gsap.from(realWordAnim.words, {
//       y: "100%",
//       opacity: 0,
//       stagger: 0.04,
//     });

//     wordShown = false;
//   }
// });

// if (wordShown) {
//   gsap.to(realWordAnim.words, {
//     y: 0,
//     opacity: 1,
//     stagger: 0,
//   });
// }

// paragraphs.forEach((paragraph) => {
//   observerWords.observe(paragraph);
// });
