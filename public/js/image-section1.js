const arrowDown = document.querySelector('.image-section1 .arrow-down');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 115) {
        arrowDown.classList.add('hidden');
    } else {
        arrowDown.classList.remove('hidden');
    }
})
