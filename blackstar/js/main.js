//Eventlistener for overlay-nav
const body = document.querySelector('body');
const menuButton = document.querySelector('.menu-button');
const overlayNav = document.querySelector('.overlay-nav');
const exitButton = document.querySelector('.overlay-nav-menu img');

menuButton.addEventListener('click', () => {
  overlayNav.classList.toggle('hidden');
  overlayNav.classList.add('transform-active');
  body.classList.toggle('no-scroll');
})

exitButton.addEventListener('click', () => {
  overlayNav.classList.toggle('hidden');
  overlayNav.classList.remove('transform-active')
  body.classList.toggle('no-scroll');
})
