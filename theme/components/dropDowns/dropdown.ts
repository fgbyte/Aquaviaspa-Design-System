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
        } else {
            // Si la pantalla es menor a 'lg'
            detailsElement.forEach((element) => {
                element.removeAttribute('open');
            });
        }
    }
});