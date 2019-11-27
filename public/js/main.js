//HEADER

const body = document.querySelector('body');
const menuButton = document.querySelector('.menu-button');
const overlayNav = document.querySelector('.overlay-nav');
const exitButton = document.querySelector('.overlay-nav-menu img');
const menuLinks = document.querySelectorAll('.overlay-nav-menu li');

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
const pressMenuItem = function () {
    setTimeout(hideMenu, 300);
}

/**
 * Scrolls to chosen section with the nav-height added to the y-axis.
 *
 * @param {string} section
 */
const scrollTo = function (section) {
    const nav = document.querySelector('.nav-bar');
    const navHeight = nav.clientHeight;

    let sectionPosition = section.offsetTop - navHeight;

    //Smooth-behavior not supported by all browsers
    window.scrollTo({
        top: sectionPosition,
        left: 0,
        behavior: 'smooth'
    });
}

//Eventlisteners for overlay-nav-menu
menuButton.addEventListener('click', showMenu);

exitButton.addEventListener('click', hideMenu);

//Eventlisteners for overlay-nav-menu links
menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {

        let menuLinkClass = menuLink.className;

        if (!(menuLinkClass === 'home' && window.pageYOffset <= 0.0)) {
            pressMenuItem();

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {

                if (menuLinkClass === section.id) {
                    let sectionId = section.id;
                    sectionId = document.querySelector('#'+sectionId);

                    setTimeout(scrollTo, 500, sectionId);
                }
            })
        } else {
            hideMenu();
        }
    })
});

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
