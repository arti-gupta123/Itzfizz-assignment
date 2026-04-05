gsap.registerPlugin(ScrollTrigger);

// 🔥 LETTER ANIMATION (premium)
gsap.to(".title span", {
  opacity: 1,
  y: -20,
  stagger: 0.05,
  duration: 0.6,
  ease: "power2.out"
});

// 🔥 STATS ANIMATION
gsap.to(".stats div", {
  opacity: 1,
  y: -10,
  stagger: 0.3,
  delay: 0.8
});

// 🚗 SCROLL CAR ANIMATION (smooth)
gsap.to(".car", {
  x: 1600,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom top",
    scrub: 1
  }
});

gsap.to(".scroll-container", {
  x: "-50%",   // left move hoga
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true   // 👈 important
  }
});