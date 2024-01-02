//prestaciones inner generic para todos las categories
document.addEventListener('DOMContentLoaded', () => {
    //pr-#
    const links = Array.from({ length: 3 }, (_, i) => document.querySelectorAll(`#pr-${i + 1}`));
    //prest-#
    const prests = Array.from({ length: 3 }, (_, i) => document.querySelectorAll(`#prest-${i + 1}`));

    // console.log(links);
    // console.log(prests);

    //ocultar los modales al principio menos el 1
    //! tiene que ser solo en LG
    if (window.matchMedia('(min-width: 992px)').matches) {
        prests.forEach((pre, i) => {
            // console.log(pre)
            // console.log(i)
            pre.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = i === 0 ? 'block' : 'none';//el 1ro del array
                }
            });
        });
    }
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 992px)').matches) {
            prests.forEach((pre, i) => {
                pre.forEach(element => {
                    if (element instanceof HTMLElement) {
                        element.style.display = i === 0
                            ? 'block'
                            : 'none';
                    }
                });
            })
        } else {
            prests.forEach((pre) => {
                pre.forEach(element => {
                    if (element instanceof HTMLElement) {
                        element.style.display = 'block';
                    }
                });
            })
        }
    });

    links.forEach((link, i) => {
        link.forEach((singleLink, _) => {
            singleLink.addEventListener('click', () => {
                prests.forEach((prest, j) => {
                    if (prest) {
                        prest.forEach((singlePrest, __) => {
                            if (singlePrest instanceof HTMLElement) {
                                singlePrest.style.display = i === j
                                    ? 'block'
                                    : 'none';
                            }
                        });
                    }
                })
            })
        });
    });
})