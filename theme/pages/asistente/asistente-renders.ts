// Asistentes Generales
const asistenteBlocks = Array.from({ length: 2 }, (_, i) => document.getElementById(`asistente-${i + 1}`));

// Asistentes inners
const asistenteInnerBlocks = Array.from({ length: 6 }, (_, i) => document.getElementById(`asistente-inner-${i + 1}`));


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


showFirstAsistenteInner()