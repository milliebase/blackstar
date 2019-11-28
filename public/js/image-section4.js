const colorPickers = document.querySelectorAll('.color-picker-touch');
const carHolders = document.querySelectorAll('.car-holder');

const handleColorPicker = (event) => {
    const eventChild = event.firstElementChild;

    colorPickers.forEach(colorPicker => {
        colorPicker.firstElementChild.classList.remove('active-outer-circle');
    })

    if (eventChild.classList.length === 1) {
        eventChild.classList.add('active-outer-circle');
    }

    carHolders.forEach(carHolder => {
        carHolder.classList.remove('active-car');

        if (eventChild.firstElementChild.classList[1] === carHolder.dataset.color) {
            carHolder.classList.add('active-car');
            eventChild.style.borderColor = carHolder.dataset.hex;
        }
    })
}

colorPickers.forEach(colorPicker => {
    colorPicker.addEventListener('click', (event) => {
        handleColorPicker(event.currentTarget);
    })
})
