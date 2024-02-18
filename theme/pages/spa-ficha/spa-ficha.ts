//render prestaciones slider
const fichaCats = Array.from({ length: 6 }, (_, i) =>
    document.querySelector(`#fichaCat-${i + 1}`));

document.addEventListener('DOMContentLoaded', () => {
    fichaCats.forEach((singleCat, index) => {
        if (singleCat instanceof HTMLElement) {
            singleCat.style.display = index === 0
            ? 'block'
            : 'none'
        }
    })

    filterLinks.forEach((singleLink, i) => {
        singleLink?.addEventListener('click', () => {
            fichaCats.forEach((singleCat, j) => {
                if (singleCat instanceof HTMLElement) {
                    singleCat.style.display = i === j
                    ? 'block'
                    : 'none';
                }
            })
        })
    })
})