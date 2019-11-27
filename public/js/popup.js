//popup effect on text-section one
const popupBox = document.querySelector('.popup');
const popupActivateBtn = document.querySelector('.text-sections button');
const popupSubmitBtn = document.querySelector('.popup button');
const popupInput = document.querySelector('.popup form input');
const submitBtnContent = document.querySelector('.popup button span');

//activate popup
popupActivateBtn.addEventListener('click', () => {
  popupActivateBtn.classList.add('button-active');
  popupBox.classList.add('popup-display');
  setTimeout(() => {
    popupBox.classList.add('popup-effect');
  }, 20)
})

//toggle placeholder on focus/blur
popupInput.addEventListener('focus', () => {
  event.target.placeholder='';
})
popupInput.addEventListener('blur', () => {
  event.target.placeholder='your email here...';
})

//activate submit button when input value has length > 2
popupInput.addEventListener('keyup', () => {
  if (event.target.value.length > 2) {
    popupSubmitBtn.classList.add('button-active');
  } else {
      popupSubmitBtn.classList.remove('button-active');
  }
})

//submit animation
popupSubmitBtn.addEventListener('click', () => {
    if(popupSubmitBtn.classList.contains('button-active')) {
        submitBtnContent.classList.add('hidden');
        popupInput.value = '';
        popupInput.placeholder='';
        setTimeout(() => {
            popupSubmitBtn.innerHTML = "<img src='images/svg/mark.svg' alt='check-mark' style='height:44px;width:44px;'>";

        }, 700)
        setTimeout(() => {
            popupBox.classList.remove('popup-effect');
        }, 1500)


    }
})
