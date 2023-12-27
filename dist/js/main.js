"use strict";
//dropdown-card lg disposition
const detailsElement = document.querySelectorAll('.dropdown-card');
if (window.matchMedia('(min-width: 992px)').matches) {
    // Si la pantalla es 'lg' o más grande
    detailsElement.forEach((element) => {
        element.toggleAttribute('open');
    });
}
//transform module
const cardTransform = document.querySelector("#card-transform");
const cardTransformRight = document.querySelector(".card-transform-right");
document.addEventListener('DOMContentLoaded', () => {
    cardTransformRight.addEventListener('mouseover', (e) => {
        if (window.innerWidth > 993) {
            cardTransform.classList.add('opac');
        }
    });
    cardTransformRight.addEventListener('mouseout', (e) => {
        cardTransform.classList.remove('opac');
    });
});
//Valores module
const tabsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`valor-${i + 1}`));
const modalsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`modal-valor-${i + 1}`));
//ocultar los modales al principio menos el 1
modalsValores.forEach((modal, i) => modal.style.display = i === 0 ? 'block' : 'none');
//agregar eventListener a las tabsValores
tabsValores.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        modalsValores.forEach((modal, j) => modal.style.display = i === j ? 'block' : 'none');
    });
});
