//popup effect on text-section one
const popupBox = document.querySelector('.popup');
const popupActivateBtn = document.querySelector('.text-sections button');
const popupSubmitBtn = document.querySelector('.popup button');
const popupInput = document.querySelector('.popup form input');
const submitBtnContent = document.querySelector('.popup button span');
console.log(submitBtnContent);

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
  } else {
      popupSubmitBtn.classList.remove('button-active');
  }
})

popupSubmitBtn.addEventListener('click', () => {
    if(popupSubmitBtn.classList.contains('button-active')) {
        submitBtnContent.classList.add('hidden');
        popupInput.value = '';
        popupInput.placeholder='';
        setTimeout(() => {
            popupSubmitBtn.innerHTML = "<img src='/public/images/svg/mark.svg' alt='check-mark'>";

        }, 700)
        setTimeout(() => {
            popupBox.classList.remove('popup-effect');
        }, 1500)


    }
})
