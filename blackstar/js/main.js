//Eventlistener for overlay-nav
const menuButton = document.querySelector('.menu-button');
const overlayNav = document.querySelector('.overlay-nav');
const exitButton = document.querySelector('.overlay-nav-menu img');

menuButton.addEventListener('click', () => {
  overlayNav.classList.toggle('hidden');
})

exitButton.addEventListener('click', () => {
  overlayNav.classList.toggle('hidden');
})
