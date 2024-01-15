const cascos = Array.from({ length: 10 }, (_, i) =>
    document.querySelectorAll(`#casco-${i + 1}`));

const muebles = Array.from({ length: 10 }, (_, i) =>
    document.querySelectorAll(`#mueble-${i + 1}`));

function checkFirstMueble(index: number) {
    // Primero, removemos el estado 'checked' de todos los inputs en todos los muebles
    muebles.forEach((nodeList) => {
        nodeList.forEach((mueble) => {
            if (mueble instanceof HTMLElement) {
                let input = mueble.querySelector('input[type="radio"]');
                if (input instanceof HTMLInputElement) {
                    input.checked = false; // Establece la propiedad checked a false
                }
            }
        });
    });

    // Luego, establecemos el estado 'checked' al primer input del mueble con el índice correspondiente
    let firstMueble = muebles[index][0];
    if (firstMueble instanceof HTMLElement) {
        let input = firstMueble.querySelector('input[type="radio"]');
        if (input instanceof HTMLInputElement) {
            input.checked = true; // Establece la propiedad checked a true
        }
    }
}


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
            checkFirstMueble(i);//reset al 1er mueble del casco en cuestión
            
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

