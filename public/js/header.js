const body = document.querySelector('body');
const menuButton = document.querySelector('.menu-button');
const overlayNav = document.querySelector('.overlay-nav');
const exitButton = document.querySelector('.overlay-nav-menu img');
const overlayMenuLinks = document.querySelectorAll('.overlay-nav-menu li');
const desktopMenuLinks = document.querySelectorAll('.desktop-nav-menu li');
const header = document.querySelector('header');
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
    if (window.pageYOffset > 5 && window.innerWidth > 1024) {
        navBar.classList.add('hide-nav-bar');
    } else {
        navBar.classList.remove('hide-nav-bar');
    }

    if (window.pageYOffset > 5) {
        header.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.13)';
    }
})
