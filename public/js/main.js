//HEADER

const body = document.querySelector('body');
const menuButton = document.querySelector('.menu-button');
const overlayNav = document.querySelector('.overlay-nav');
const exitButton = document.querySelector('.overlay-nav-menu img');
const overlayMenuLinks = document.querySelectorAll('.overlay-nav-menu li');
const desktopMenuLinks = document.querySelectorAll('.desktop-nav-menu li');
const navBar = document.querySelector('.nav-bar');

/**
 * Callback function to show menu when menu-icon is clicked.
 *
 */
const showMenu = function () {
    overlayNav.classList.add('transform-active');
    body.classList.toggle('no-scroll');
}

/**
 * Callback function to hide menu when exit-icon is clicked.
 *
 */
const hideMenu = function () {
    overlayNav.classList.remove('transform-active')
    body.classList.toggle('no-scroll');
}

/**
 * //Callback function to hide menu and scroll to a section with a short time delay.
 *
 */
const pressOverlayMenuItem = function () {
    setTimeout(hideMenu, 300);
}

/**
 * Scrolls to chosen section with the nav-height/header-height added to the y-axis.
 *
 * @param {string} sectionPosition
 */
const scrollToSection = function (sectionPosition) {
     //Smooth-behavior not supported by all browsers
     window.scrollTo({
        top: sectionPosition,
        left: 0,
        behavior: 'smooth'
    });
}

/**
 * Checks if desktop or mobile and gets nav-height or header-height depending on which device.
 *
 * @param {string} section
 */
const isMobileOrDesktop = function (section) {

    if (window.innerWidth >= 1024) {
        const header = document.querySelector('header');
        const headerHeight = header.clientHeight;

        let sectionPosition = section.offsetTop - headerHeight;

        scrollToSection(sectionPosition);
    }

    if (window.innerWidth < 1024) {
        const nav = document.querySelector('.nav-bar');
        const navHeight = nav.clientHeight;

        let sectionPosition = section.offsetTop - navHeight;

        setTimeout(scrollToSection, 200, sectionPosition);
    }
}

/**
 * //Callback function to find right section to scroll to.
 *
 */
const findSection = (event) => {
    let eventClass = event.srcElement.className;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {

        if (eventClass === section.id) {
            let sectionId = section.id;
            sectionId = document.querySelector('#'+sectionId);

            isMobileOrDesktop(sectionId);
        }
    })
}

//Eventlisteners for overlay-nav-menu
menuButton.addEventListener('click', showMenu);

exitButton.addEventListener('click', hideMenu);

//Eventlisteners for overlay-nav-menu links
overlayMenuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', (event) => {
        if (!(menuLink.className === 'home' && window.pageYOffset <= 0.0)) {
            pressOverlayMenuItem();
            findSection(event);
        } else {
            hideMenu();
        }
    })
});

//Eventlisteners for desktop-nav-menu links
desktopMenuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', (event) => {
        if (!(menuLink.className === 'home' && window.pageYOffset <= 0.0)) {
            findSection(event);
        }
    })
})


window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navBar.classList.add('hide-nav-bar');
    } else {
        navBar.classList.remove('hide-nav-bar');
    }
})

//.IMAGE-SECTION4
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


//.IMAGE-SECTION3
const leftArrow = document.querySelector('.arrow-holder-left');
const rightArrow = document.querySelector('.arrow-holder-right');
const imgHolder = document.querySelector('.img-inner-holder');
const image = document.querySelector('.img-inner-holder img');
const imageWidth = image.clientWidth;

const slideToRight = () => {
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
    const thirdImage = imageWidth * 2;

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
