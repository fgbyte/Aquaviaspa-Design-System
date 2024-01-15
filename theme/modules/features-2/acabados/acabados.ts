const cascos = Array.from({ length: 10 }, (_, i) =>
    document.querySelectorAll(`#casco-${i + 1}`));

const muebles = Array.from({ length: 10 }, (_, i) =>
    document.querySelectorAll(`#mueble-${i + 1}`));

//ocultar al principio todos los muebles menos el 1ro
muebles.forEach((nodeList, index) => {
    nodeList.forEach((mueble) => {
        if (mueble instanceof HTMLElement) {
            mueble.style.display = index === 0
            ? 'flex'
            : 'none'
        }
    })
})

//por cada casco checked mostrar el mueble correspondiente
cascos.forEach((nodeList, i) => {
    nodeList.forEach((casco, _) => {
        casco.addEventListener('click', () => {
            //aquí debe ir el reset
            muebles.forEach((nodeList, j) => {
                if (nodeList) {
                    nodeList.forEach((mueble, _) => {
                        if (mueble instanceof HTMLElement) {
                            mueble.style.display = i === j
                            ? 'flex'
                            : 'none'
                        }
                    })
                }
            })
        })
    })
})