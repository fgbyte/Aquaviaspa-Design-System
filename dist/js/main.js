"use strict";
//dropdown-card lg disposition
window.addEventListener('resize', () => {
    const detailsElement = document.querySelector('.dropdown-card');
    if (detailsElement) {
        if (window.matchMedia('(min-width: 992px)').matches) {
            // Si la pantalla es 'lg' o más grande
            detailsElement.setAttribute('open', '');
        }
        else {
            // Si la pantalla es menor a 'lg'
            detailsElement.removeAttribute('open');
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
