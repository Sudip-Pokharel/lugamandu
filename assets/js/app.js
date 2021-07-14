const menuIcon = document.getElementById('menu-icon'),
  currentYear = document.getElementById('currentYear'),
  body = document.querySelector('body');

currentYear.innerHTML = new Date().getFullYear();

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(e) {
  e.preventDefault();
  body.classList.toggle('menu--open');
}
