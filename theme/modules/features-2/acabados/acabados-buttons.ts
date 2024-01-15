const cascos = document.querySelectorAll('[id^="casco-"]');
const muebles = document.querySelectorAll('[id^="mueble-"]');

function checkFirstMueble(index: number) {
    muebles.forEach((mueble, i) => {
        if (mueble instanceof HTMLElement) {
            const input = mueble.querySelector('input[type="radio"]');
            if (input instanceof HTMLInputElement) {
                input.checked = (i === index);
            }
        }
    });
}

muebles.forEach((mueble, index) => {
    if (mueble instanceof HTMLElement) {
        mueble.style.display = (index === 0) ? 'flex' : 'none';
    }
});

cascos.forEach((casco, index) => {
    casco.addEventListener('click', () => {
        checkFirstMueble(index);

        muebles.forEach((mueble, i) => {
            if (mueble instanceof HTMLElement) {
                mueble.style.display = (i === index) ? 'flex' : 'none';
            }
        });
    });
});