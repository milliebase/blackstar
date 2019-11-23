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

//popup effect on text-section one
const popupBox = document.querySelector('.popup');
const popupActivateBtn = document.querySelector('.text-sections button');
const popupSubmitBtn = document.querySelector('.popup button');
const popupInput = document.querySelector('.popup form input');

popupActivateBtn.addEventListener('click', () => {
  popupActivateBtn.classList.add('button-active');
  popupBox.classList.add('popup-display');
  setTimeout(() => {
    popupBox.classList.add('popup-effect');
  }, 20)
})

popupInput.addEventListener('focus', () => {
  event.target.placeholder='';
})

popupInput.addEventListener('blur', () => {
  event.target.placeholder='your email here...';
})

popupInput.addEventListener('keyup', () => {
  if (event.target.value.length > 2) {
    popupSubmitBtn.classList.add('button-active');
  }
})
