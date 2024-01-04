
//categories
//pr-#
const links = Array.from({ length: 5 }, (_, i) => document.querySelectorAll(`#pr-${i + 1}`));
//prest-#
const cards = Array.from({ length: 5 }, (_, i) => document.querySelectorAll(`#prest-${i + 1}`));
const special = 1158;

function showOnly(cardNumber: number) {//muestra el card que quieras
    cards.forEach((nodeCard, index) => {
        nodeCard.forEach(singleCard => {
            if (singleCard instanceof HTMLElement) {
                singleCard.style.display = index === cardNumber
                    ? 'block'
                    : 'none';
                    singleCard.style.transition = index === cardNumber
                    ? 'all 1000ms'
                    : 'all 1000ms';
                singleCard.style.visibility = index === cardNumber
                    ? 'visible'
                    : 'hidden';
                singleCard.style.display = index === cardNumber
                    ? 'block'
                    : 'block';
                singleCard.style.position = index === cardNumber
                    ? 'relative'
                    : 'absolute';
                singleCard.style.opacity = index === cardNumber
                    ? '1'
                    : '0';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {

    //ocultar los modales al principio menos el 1 solo en LG
    if (window.matchMedia(`(min-width: ${special}px)`).matches) {
        showOnly(0)//el 1ro del array
    }
    window.addEventListener('resize', () => {
        if (window.matchMedia(`(min-width: ${special}px)`).matches) {
            showOnly(0)//el 1ro del array
        } else {
            cards.forEach((nodeCard) => {
                nodeCard.forEach(singleCard => {
                    if (singleCard instanceof HTMLElement) {
                        singleCard.style.display = 'block';
                        singleCard.style.visibility = 'visible';
                        singleCard.style.transition = 'all 1000ms';
                        singleCard.style.position = 'relative';
                        singleCard.style.opacity = '1';
                    }
                });
            })
        }
    });

    links.forEach((nodeLink, i) => {
        nodeLink.forEach((singleLink, _) => {
            singleLink.addEventListener('click', () => {
                cards.forEach((nodeCard, j) => {
                    if (nodeCard) {
                        nodeCard.forEach((singleCard, __) => {
                            if (singleCard instanceof HTMLElement) {
                                singleCard.style.transition = i === j
                                    ? 'all 1000ms'
                                    : 'all 1000ms';
                                singleCard.style.visibility = i === j
                                    ? 'visible'
                                    : 'hidden';
                                singleCard.style.display = i === j
                                    ? 'block'
                                    : 'block';
                                singleCard.style.position = i === j
                                    ? 'relative'
                                    : 'absolute';
                                singleCard.style.opacity = i === j
                                    ? '1'
                                    : '0';

                            }
                        });
                    }
                })
            })
        });
    });
})
