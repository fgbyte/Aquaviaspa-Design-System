//el js de la web



//dropdown-card lg disposition
window.addEventListener('resize', () => {
    const detailsElement = document.querySelector('.dropdown-card');
    if (window.matchMedia('(min-width: 992px)').matches) {
      // Si la pantalla es 'lg' o más grande
      detailsElement.setAttribute('open', '');
    } else {
      // Si la pantalla es menor a 'lg'
      detailsElement.removeAttribute('open');
    }
  });