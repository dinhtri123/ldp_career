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