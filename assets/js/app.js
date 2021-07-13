const menuIcon = document.getElementById('menu-icon'),
  body = document.querySelector('body');

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(e) {
  e.preventDefault();
  body.classList.toggle('menu--open');
}
