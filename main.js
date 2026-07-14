import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ----------------------------------------------------------
   The Inner Safety OS™ - interactions
   - Nav background on scroll
   - Year stamp in footer
   - Scroll-reveal via GSAP & ScrollTrigger
   ---------------------------------------------------------- */

const nav = document.getElementById("nav");

const onScroll = () => {
  if (window.scrollY > 24) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* --- Premium GSAP Animations --- */
gsap.registerPlugin(ScrollTrigger);

const heroElements = document.querySelectorAll(".hero__inner .reveal");
const scrollRevealElements = document.querySelectorAll(".reveal:not(.hero__inner .reveal)");

// Initial hero load sequence
if (heroElements.length) {
  gsap.fromTo(
    heroElements,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    }
  );
}

// Scroll-triggered reveals for the rest of the page
if (scrollRevealElements.length) {
  scrollRevealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  });
}