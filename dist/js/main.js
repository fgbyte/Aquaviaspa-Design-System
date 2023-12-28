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
document.addEventListener('DOMContentLoaded', () => {
    if (cardTransformRight) {
        cardTransformRight.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 993) {
                if (cardTransform) {
                    cardTransform.classList.add('opac');
                }
            }
        });
        cardTransformRight.addEventListener('mouseout', (e) => {
            if (cardTransform) {
                cardTransform.classList.remove('opac');
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
    const bannerHeight = banner.offsetHeight;
    console.log(navLogo);
    window.addEventListener('scroll', function () {
        if (window.scrollY > bannerHeight) {
            navbar.classList.add('white-mode');
            navLinks.forEach((link) => {
                link.classList.remove('link--white');
            });
            navLogo.src = '/dist/assets/icons/logofooter.svg';
        }
        else {
            navbar.classList.remove('white-mode');
            navLinks.forEach((link) => {
                link.classList.add('link--white');
            });
            navLogo.src = '/dist/assets/icons/logo-navbar.svg';
        }
    });
});
