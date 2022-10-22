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
      gsap.from(".img-contain", {
        duration: 2,
        y: -300,
        opacity: 0,
        stagger: 0.5,
        ease: "back",
      });
    }
  });
});

const pageSections = document.querySelectorAll(".section");
const gallery = document.querySelector(".gallery");
pageSections.forEach((section) => observer.observe(section));
observer2.observe(gallery);
