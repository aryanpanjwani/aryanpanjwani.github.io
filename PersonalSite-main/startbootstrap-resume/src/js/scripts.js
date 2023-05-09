//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
const sideNav = document.body.querySelector('#sideNav');
if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav',
        rootMargin: '0px 0px -40%',
    });
};

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
);
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});

// Activate Bootstrap accordion on accordion elements
const accordionItems = [].slice.call(
    document.querySelectorAll('.accordion-item')
);
accordionItems.map(function (accordionItem) {
    const accordionButton = accordionItem.querySelector('.accordion-button');
    accordionButton.addEventListener('click', () => {
        accordionItem.classList.toggle('active');
    });
});

// Initialize Bootstrap carousel on carousel element
const carousel = document.querySelector('.carousel');
if (carousel) {
    new bootstrap.Carousel(carousel, {
        interval: 5000,
        pause: 'hover'
    });
}

});
