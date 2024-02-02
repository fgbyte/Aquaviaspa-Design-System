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
                block.style.display = 'block';
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
type AsistenteID = 0 | 1 | 2 | 3 | 4 | 5;
function hideSpecificAsistenteInner(id: AsistenteID) {
    asistenteBlocks.forEach((block) => {
        let helper = `asistente-inner${id}`
        if (block && block.id === helper) {
            block.style.display = 'none';
        }
    })
}
function showSpecificAsistenteInner(id: AsistenteID) {
    asistenteBlocks.forEach((block) => {
        let helper = `asistente-inner${id}`
        if (block && block.id === helper) {
            block.style.display = 'block';
        }
    })
}



function handleInnerInputClick(event: Event) {
    const mouseEvent = event as MouseEvent;
    const clickedInput = mouseEvent.target;
    if (clickedInput) {
        const grandParentElement = (clickedInput as Node).parentNode?.parentNode?.parentNode as HTMLElement;
        const currentAsistenteInner = grandParentElement.id;
        console.log(currentAsistenteInner)
        //hasta aquí me da el id del asistente inner
    }

}

document.addEventListener("DOMContentLoaded", function () {
    showFirstAsistente();

    asistenteFirstInputs.forEach((input) => {
        input.addEventListener('click', () => {
            hideFirstAsistente();
            showSecondAsistente();
            // showFirstAsistenteInner();
        })
    })


    //click en los inputs del asistente inner activa handleInnerInputClick()
    asistenteInnerInputs.forEach((input) => {
        input.addEventListener('click', handleInnerInputClick);

    });
});