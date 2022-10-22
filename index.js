gsap.from(".img-contain", {
  duration: 2,
  y: -300,
  opacity: 0,
  stagger: 0.5,
  ease: "back",
});

gsap.from(".gallery", {
  opacity: 0,
  y: 200,
  duration: 2,
});
