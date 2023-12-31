//prestaciones inner
document.addEventListener('DOMContentLoaded', () => {
    //pr-#
    const links = Array.from({ length: 3 }, (_, i) => document.getElementById(`pr-${i + 1}`));
    //prest-#
    const prests = Array.from({ length: 3 }, (_, i) => document.getElementById(`prest-${i + 1}`));

    //ocultar los modales al principio menos el 1
    //! tiene que ser solo en LG
    if (window.matchMedia('(min-width: 992px)').matches){
        prests.forEach((pre, i) => {
            if (pre) {
                pre.style.display = i === 0
                    ? 'block'
                    : 'none';
            }
        })
    }
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 992px)').matches){
            prests.forEach((pre, i) => {
                if (pre) {
                    pre.style.display = i === 0
                        ? 'block'
                        : 'none';
                }
            })
        } else {
            prests.forEach((pre) => {
                if (pre) {
                    pre.style.display = 'block';
                }
            })
        }
    });

    links.forEach((link, i) => {
        if (link) {
            link.addEventListener('click', () => {
                prests.forEach((prest, j) => {
                    if (prest) {
                        prest.style.display = i === j
                            ? 'block'
                            : 'none';
                    }
                })
            })
        }
    })
})