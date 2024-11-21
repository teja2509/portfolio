document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-animation]");
  const hero = document.querySelector(".hero"); 


  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();


      if (rect.top < window.innerHeight - 100) {
        section.classList.add("in-view");
        section.classList.remove("reverse-in-view");
      } else {
        section.classList.remove("in-view");
        section.classList.add("reverse-in-view");
      }
    });
  });

  if (hero) {
    hero.classList.add("in-view"); 
  }
});
