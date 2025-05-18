document.addEventListener('DOMContentLoaded', function() {
  const iconMenu = document.querySelector('.icon-menu');
  const headerMenu = document.querySelector('.header-right-wrapper');
  const iconClose = document.querySelector('.icon-close-menu');
  iconMenu.addEventListener('click', function() {
    headerMenu.classList.add('active')
  });
  iconClose.addEventListener('click', function() {
    headerMenu.classList.remove('active')
  });
})

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll("span[data-count]");
  const options = {
    threshold: 0.6,
  };

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute("data-count").replace(/,/g, ""), 10);
    const duration = 2000;
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const counter = setInterval(() => {
      start++;
      el.textContent = start.toLocaleString();
      if (start >= target) {
        clearInterval(counter);
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!el.dataset.animated) {
          el.dataset.animated = "true";
          animateCount(el);
        }
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
    
  });
});
