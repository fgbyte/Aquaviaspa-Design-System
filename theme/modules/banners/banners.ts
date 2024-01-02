//banner-ficha
window.addEventListener('resize', adjustBannerFicha);

function adjustBannerFicha() {
    const bannerFichaCard = document.querySelector('.banner-ficha__card__img');
    const bannerFicha = document.querySelector('.banner-ficha');
    const lgSize = 992;

    if (window.innerWidth >= lgSize) {
        if (bannerFichaCard) {
            bannerFichaCard.removeAttribute('id');
        }
        if (bannerFicha) {
            bannerFicha.setAttribute('id', 'hero');
        }
    } else {
        if (bannerFicha) {
            bannerFicha.removeAttribute('id');
        }
        if (bannerFichaCard) {
            bannerFichaCard.setAttribute('id', 'hero');
        }
    }
}

adjustBannerFicha()