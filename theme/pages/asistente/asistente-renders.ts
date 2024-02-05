// Asistentes Generales
const asistenteBlocks = Array.from({ length: 2 }, (_, i) => document.getElementById(`asistente-${i + 1}`));

// Asistentes inners
const asistenteInnerBlocks = Array.from({ length: 6 }, (_, i) => document.getElementById(`asistente-inner-${i + 1}`));

//Inputs Primeros
const asistenteFirstInputs = document.querySelectorAll(`.asistente-input`)

//Inputs inner
const asistenteInnerInputs = document.querySelectorAll(`.asistente-input--inner`)

//Anterior Button
const anteriorButton = document.querySelectorAll('#asistente-anterior')

//Ultimo Button
const lastButton = document.querySelector('#asistente-last-btn')

//Funciones helpers

function scrollUp() {
    window.scrollTo(0, 0);
}

function showFirstAsistente() {
    if (asistenteBlocks) {
        asistenteBlocks.forEach((block) => {
            if (block && block.id === 'asistente-1') {
                block.style.display = 'block';
                scrollUp();
            } else {
                if (block) {
                    block.style.display = 'none';
                }
            }
        });
    }
}

function hideFirstAsistente() {
    if (asistenteBlocks) {
        asistenteBlocks.forEach((block) => {
            if (block && block.id === 'asistente-1') {
                block.style.display = 'none';
            }
        })
    }
}

function showSecondAsistente() {
    if (asistenteBlocks) {
        asistenteBlocks.forEach((block) => {
            if (block && block.id === 'asistente-2') {
                block.style.display = 'flex';
                scrollUp();
            } else {
                if (block) {
                    block.style.display = 'none';
                }
            }
        });
    }
}

function showFirstAsistenteInner() {
    if (asistenteInnerBlocks) {
        asistenteInnerBlocks.forEach((block) => {
            if (block && block.id === 'asistente-inner-1') {
                block.style.display = 'flex';
            } else {
                if (block) {
                    block.style.display = 'none';
                }
            }
        });
    }
}

function hideFirstAsistenteInner() {
    if (asistenteInnerBlocks) {
        asistenteInnerBlocks.forEach((block) => {
            if (block && block.id === 'asistente-inner-1') {
                block.style.display = 'none';
            }
        })
    }
}

function hideSpecificAsistenteInner(asistente: HTMLElement) {
    asistente.style.display = 'none';
}
function showSpecificAsistenteInner(asistente: HTMLElement) {
    asistente.style.display = 'flex';
    const secondChild = asistente.children[1] as HTMLElement;
    secondChild.style.display = 'flex';
    scrollUp();
}


function handleInnerInputClick(event: Event) {
    const mouseEvent = event as MouseEvent;
    const clickedInput = mouseEvent.target;
    if (clickedInput) {
        const grandParentElement = (clickedInput as Node).parentNode?.parentNode?.parentNode as HTMLElement;
        //ocultar el current
        const currentAsistenteInner = grandParentElement;
        hideSpecificAsistenteInner(currentAsistenteInner);
        //mostrar el next
        const nextAsistenteInner = currentAsistenteInner.nextElementSibling;
        if (nextAsistenteInner instanceof HTMLElement) {
            showSpecificAsistenteInner(nextAsistenteInner);
        }
    }

}

function handleAnteriorClick() {
    //que detecte si esta en el asistente-inner-1 que hal hacer click se ponga en 'none' y el block el asistente-1 ✅
    asistenteInnerBlocks.forEach((asistenteInner) => {
        if (asistenteInner && asistenteInner.id === 'asistente-inner-1' && asistenteInner.style.display === 'flex') {
            showFirstAsistente()
        }
    })

    //que detecte si esta en el asistente-inner-2 al hacer click se ponga en 'none y flex el asistente-inner-1 y asi para los otros ✅
    asistenteInnerBlocks.forEach((asistenteInner) => {
            for (let i = 6; i >= 2; i--) {
            if (asistenteInner && asistenteInner.id === `asistente-inner-${i}` && asistenteInner.style.display === 'flex') {
                const currentAsistenteInner = asistenteInner;
                hideSpecificAsistenteInner(currentAsistenteInner)
                // console.log('current', currentAsistenteInner)
                const previousAsistenteInner = currentAsistenteInner.previousElementSibling;
                if (previousAsistenteInner instanceof HTMLElement) {
                    // console.log('previous', previousAsistenteInner)
                    showSpecificAsistenteInner(previousAsistenteInner);
                }
            }
        }
    })
}


document.addEventListener("DOMContentLoaded", function () {
    showFirstAsistente();

    //click en los primeros inputs activa:
    asistenteFirstInputs.forEach((input) => {
        input.addEventListener('click', () => {
            hideFirstAsistente();
            showSecondAsistente();
            showFirstAsistenteInner();
        })
    })


    //click en los inputs del asistente inner activa handleInnerInputClick()
    asistenteInnerInputs.forEach((input) => {
        input.addEventListener('click', handleInnerInputClick);

    });

    //click en el Anterior activa handleAnteriorClick()
    anteriorButton.forEach((btn) => {
        btn?.addEventListener('click', handleAnteriorClick);
    })

    if (lastButton) {
        lastButton.addEventListener('click', () => {
            console.log(stepValue)
        })
    }
});