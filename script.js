// Parallax Effect for Hero Section
document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Get the current scroll position
    const heroContent = document.querySelector(".hero-content");
  
    // Update the transform property based on the scroll position (works for both scroll up and scroll down)
    heroContent.style.transform = `translateZ(${50 - scrollPosition / 20}px) scale(1.1)`;
  });
  
  // Scroll-Triggered Animations
  const scrollElements = document.querySelectorAll("[data-scroll]");
  
  const elementInView = (el, offset = 1.25) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / offset;
  };
  
  const displayScrollElement = (element) => {
    element.setAttribute("data-scroll-visible", true);
  };
  
  const hideScrollElement = (element) => {
    element.removeAttribute("data-scroll-visible");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
  