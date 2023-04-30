// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry, idx) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// });

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
        delay: 0.3,
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
        delay: 0.3,
      });

      about2Shown = true;
    }
  });
});

observeAbout1.observe(aboutDescrip1);
observeAbout2.observe(aboutDescrip2);

gsap.registerPlugin(ScrollTrigger);

// GSAP FOR ANIMATIONS ON LOAD

// ABOUT US LOAD
gsap.from(".about", {
  y: 230,
  opacity: 0,
  duration: 1,
  ease: "ease",
  scrollTrigger: ".about",
});

// POPULAR WEEK LOAD
gsap.from(".popularWeek", {
  y: 230,
  opacity: 0,
  duration: 1,
  scrollTrigger: ".popularWeek",
});

// MODELS LOAD
gsap.from(".models", {
  y: 230,
  opacity: 0,
  duration: 1,
  ease: "ease",
  scrollTrigger: ".models",
});

// GALLERY LOAD
gsap.from(".gallery", {
  y: 230,
  opacity: 0,
  duration: 1,
  ease: "ease",
  scrollTrigger: ".gallery",
});

// SUBSCRIBE LOAD
gsap.from(".subscribe", {
  y: 230,
  opacity: 0,
  duration: 1,
  ease: "ease",
  scrollTrigger: ".subscribe",
});

const pageSections = document.querySelectorAll(".section");
const imgContains = document.querySelectorAll(".img-contain");
const gallery = document.querySelector(".gallery");
// pageSections.forEach((section) => observer.observe(section));
observer2.observe(gallery);

const hamburger = document.querySelector(".navigation__hamburger");
const navRight = document.querySelector(".navigation__right");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".navigation__link");
const navCtaLink = document.querySelector(".navigation__cta-link");

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

navCtaLink.addEventListener("click", () => {
  navRight.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  navRight.classList.remove("active");
  overlay.classList.remove("active");
});

/////////////////////////
/////////////////////////
// ANIMATION FOR HERO SECTION

const myText = new SplitType(".hero__descrip");
0;
gsap.from(myText.words, {
  y: "100%",
  opacity: 0,
  stagger: 0.04,
  delay: 0.5,
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
