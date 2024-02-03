// Asistentes Generales
const asistenteBlocks = Array.from({ length: 2 }, (_, i) => document.getElementById(`asistente-${i + 1}`));

// Asistentes inners
const asistenteInnerBlocks = Array.from({ length: 6 }, (_, i) => document.getElementById(`asistente-inner-${i + 1}`));

//? console.log(asistenteInnerBlocks[0])

//Inputs Primeros
const asistenteFirstInputs = document.querySelectorAll(`#asistente-input`)

//Inputs inner
const asistenteInnerInputs = document.querySelectorAll(`#asistente-inner-input`)


//mostrar solo el Primero de los Generales
function showFirstAsistente() {
    if (asistenteBlocks) {
        asistenteBlocks.forEach((block) => {
            if (block && block.id === 'asistente-1') {
                block.style.display = 'block';
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
            } else {
                if (block) {
                    block.style.display = 'none';
                }
            }
        });
    }
}

//mostrar solo el Primero de los Inner
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

//?
function hideSpecificAsistenteInner(asistente: HTMLElement) {
    asistente.style.display = 'none';
}
function showSpecificAsistenteInner(asistente: HTMLElement) {
    asistente.style.display = 'flex';
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
        const nextAsistenteInner = grandParentElement.nextElementSibling;
        if (nextAsistenteInner instanceof HTMLElement) {
            showSpecificAsistenteInner(nextAsistenteInner);
        }
    }

}

document.addEventListener("DOMContentLoaded", function () {
    showFirstAsistente();

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
});