import "./style.css";

/* ----------------------------------------------------------
   The Inner Safety OS™ — interactions
   - Nav background on scroll
   - Year stamp in footer
   - Scroll-reveal via IntersectionObserver
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

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
