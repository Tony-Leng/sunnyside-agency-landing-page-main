// the button to open the modal //
const hamburger = document.querySelector('.navbar-toggler');

// the ul surrounding the nav items //
const navMenu = document.querySelector('.navbar-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})
