"use strict";
//dropdown-card lg disposition
const detailsElement = document.querySelectorAll('.dropdown-card');
if (window.matchMedia('(min-width: 992px)').matches) {
    // Si la pantalla es 'lg' o más grande
    detailsElement.forEach((element) => {
        element.setAttribute('open', '');
    });
}
window.addEventListener('resize', () => {
    if (detailsElement) {
        if (window.matchMedia('(min-width: 992px)').matches) {
            // Si la pantalla es 'lg' o más grande
            detailsElement.forEach((element) => {
                element.setAttribute('open', '');
            });
        }
        else {
            // Si la pantalla es menor a 'lg'
            detailsElement.forEach((element) => {
                element.removeAttribute('open');
            });
        }
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
