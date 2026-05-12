const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
<<<<<<< HEAD
=======

const revealNodes = document.querySelectorAll(".reveal-on-scroll");

if (revealNodes.length > 0 && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  for (const el of revealNodes) {
    io.observe(el);
  }
} else if (revealNodes.length > 0) {
  for (const el of revealNodes) {
    el.classList.add("is-visible");
  }
}
>>>>>>> 357a869 (Update website design and add demo section)
