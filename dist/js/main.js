"use strict";
//dropdown-card lg disposition
document.addEventListener('DOMContentLoaded', () => {
    const detailsElement = document.querySelectorAll('.dropdown-card');
    if (window.matchMedia('(min-width: 992px)').matches) {
        // Si la pantalla es 'lg' o más grande
        detailsElement.forEach((element) => {
            element.toggleAttribute('open');
        });
    }
});
//transform module
const cardTransform = document.querySelector("#card-transform");
const cardTransformRight = document.querySelector(".card-transform-right");
const transformModule = document.querySelector(".transform-module");
document.addEventListener('DOMContentLoaded', () => {
    if (cardTransformRight) {
        cardTransformRight.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 993) {
                if (cardTransform) {
                    cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.add('opac');
                }
            }
        });
        cardTransformRight.addEventListener('mouseout', (e) => {
            if (cardTransform) {
                cardTransform === null || cardTransform === void 0 ? void 0 : cardTransform.classList.remove('opac');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    //Valores module
    const tabsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`valor-${i + 1}`));
    const modalsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`modal-valor-${i + 1}`));
    //ocultar los modales al principio menos el 1
    modalsValores.forEach((modal, i) => {
        if (modal) {
            modal.style.display = i === 0 ? 'block' : 'none';
        }
    });
    //agregar eventListener a las tabsValores
    tabsValores.forEach((tab, i) => {
        if (tab) {
            tab.addEventListener('click', () => {
                modalsValores.forEach((modal, j) => {
                    if (modal) {
                        modal.style.display = i === j ? 'block' : 'none';
                    }
                });
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('#navbar');
    const banner = document.querySelector('#hero');
    const navLinks = navbar.querySelectorAll('.link');
    const navLogo = navbar.querySelector('#navlogo');
    const firstMenuBurger = navbar.querySelector('#menu-burger');
    const menuBurger = navbar.querySelectorAll('#menu-burger');
    const menuSpas = navbar.querySelector('#spas');
    const menuSwimspas = navbar.querySelector('#swimspas');
    const menuPrestaciones = navbar.querySelector('#prestaciones');
    const closeMenu = navbar.querySelectorAll('.close-menu');
    const previousMenu = navbar.querySelectorAll('.previous-menu');
    const mainMenu = document.querySelector('.main-menu');
    const spasMenu = document.querySelector('.spas-menu');
    const swimspasMenu = document.querySelector('.swimspas-menu');
    const prestacionesMenu = document.querySelector('.prestaciones-menu');
    const menuBackdrop = document.querySelector('.menuBackdrop');
    menuBurger.forEach((element) => {
        element.addEventListener('click', function () {
            mainMenu.classList.add('active');
            menuBackdrop.classList.add('isOpenBackdrop');
        });
    });
    menuSpas.addEventListener('click', function () {
        spasMenu.classList.add('active');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active');
    });
    menuSwimspas.addEventListener('click', function () {
        swimspasMenu.classList.add('active');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active');
    });
    menuPrestaciones.addEventListener('click', function () {
        prestacionesMenu.classList.add('active');
        menuBackdrop.classList.add('isOpenBackdrop');
        mainMenu.classList.remove('active');
    });
    closeMenu.forEach((elemet) => {
        elemet.addEventListener('click', function () {
            mainMenu.classList.remove('active');
            menuBackdrop.classList.remove('isOpenBackdrop');
            spasMenu.classList.remove('active');
            swimspasMenu.classList.remove('active');
            prestacionesMenu.classList.remove('active');
        });
    });
    previousMenu.forEach((elemet) => {
        elemet.addEventListener('click', function () {
            mainMenu.classList.add('active');
            spasMenu.classList.remove('active');
            swimspasMenu.classList.remove('active');
            prestacionesMenu.classList.remove('active');
        });
    });
    menuBackdrop.addEventListener('click', function () {
        mainMenu.classList.remove('active');
        spasMenu.classList.remove('active');
        swimspasMenu.classList.remove('active');
        prestacionesMenu.classList.remove('active');
        menuBackdrop.classList.remove('isOpenBackdrop');
    });
    const bannerHeight = banner.offsetHeight;
    window.addEventListener('scroll', function () {
        if (window.scrollY > bannerHeight) {
            navbar.classList.add('white-mode');
            navLinks.forEach((link) => {
                link.classList.remove('link--white');
            });
            navLogo.src = '/dist/assets/icons/logofooter.svg';
            firstMenuBurger.src = '/dist/assets/icons/menu-closed-black.svg';
        }
        else {
            navbar.classList.remove('white-mode');
            navLinks.forEach((link) => {
                link.classList.add('link--white');
            });
            navLogo.src = '/dist/assets/icons/logo-navbar.svg';
            firstMenuBurger.src = '/dist/assets/icons/menu-closed-whait.svg';
        }
    });
});
