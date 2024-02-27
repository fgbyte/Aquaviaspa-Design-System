//imagenes de asientos
const jetAsientos = Array.from({ length: 15 }, (_, i) => document.querySelector(`#jet-${i + 1}`));
//si esta activo que se muestre el asiento

//imagenes de los jet x accordions
const jetAccordions = Array.from({ length: 15 }, (_, i) => document.querySelector(`#jet-accordion-${i + 1}`));

//accordions
const accordionsOnCards = Array.from({ length: 30 }, (_, i) => document.querySelector(`#accordion-${i + 1}`));

function showOnlyAsientos() {
    
}

function hideAllAccordionsJets() {
    jetAccordions.forEach((jet) => {
       jet && hideJet(jet as HTMLElement);
    })
}
//ocultar todos los accordions jets
hideAllAccordionsJets()

// Funciones para ocultar y mostrar jet
function hideJet(jet: HTMLElement) {
    jet.style.display = 'none';
}

function showJet(jet: HTMLElement) {
    jet.style.display = 'block';
}


// Función para ocultar el jetAsiento y mostrar el jetAccordion correspondiente
function handleAccordionOpen(index: number) {
    
}

function handleAccordionClose(index: number) {
   
}

// Agregar eventos de escucha a los accordions
accordionsOnCards.forEach((accordion, index) => {
    accordion?.addEventListener('click', () => {
        if (accordion?.ariaExpanded === 'true') {
            console.log('open', index)
        } else {
            console.log('close', index)
        }
    })
});