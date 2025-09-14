document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hobby, .project");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.2 // 20% visible before animation triggers
  });

  elements.forEach(el => observer.observe(el));
});