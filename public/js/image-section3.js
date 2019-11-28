const leftArrow = document.querySelector('.arrow-holder-left');
const rightArrow = document.querySelector('.arrow-holder-right');
const imgHolder = document.querySelector('.img-inner-holder');
const image = document.querySelector('.img-inner-holder img');

const slideToRight = () => {
    const imageWidth = image.clientWidth;

        if (imgHolder.scrollLeft < imageWidth) {
            imgHolder.scrollTo({
                top: 0,
                left: imageWidth,
                behavior: 'smooth'
            });
        }

        if (imgHolder.scrollLeft >= imageWidth) {
            imgHolder.scrollTo({
                top: 0,
                left: imageWidth * 2,
                behavior: 'smooth'
            });
        }
}

const slideToLeft = () => {
    const imageWidth = image.clientWidth;

    if (imgHolder.scrollLeft > imageWidth ) {
        imgHolder.scrollTo({
            top: 0,
            left: imageWidth,
            behavior: 'smooth'
        });
    }

    if (imgHolder.scrollLeft <= imageWidth) {
        imgHolder.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}

const handleSlide = (e) => {
    if (e.toElement.alt === 'Right arrow') {
        slideToRight();
    }

    if (e.toElement.alt === 'Left arrow') {
        slideToLeft();
    }
}

leftArrow.addEventListener('click', (e) => {
    handleSlide(e);
});

rightArrow.addEventListener('click', (e) => {
    handleSlide(e);
});
