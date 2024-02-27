const jetAsientos = Array.from({ length: 15 }, (_, i) => document.querySelector(`#jet-${i + 1}`));
const jetAccordions = Array.from({ length: 30 }, (_, i) => document.querySelector(`#jet-accordion-${i + 1}`));
const accordionsOnCards = Array.from({ length: 30 }, (_, i) => document.querySelector(`#accordion-${i + 1}`));

//* Functions helpers
// Funciones para ocultar y mostrar jet
function hideJet(jet: HTMLElement) {
    jet.style.display = 'none';
}

function showJet(jet: HTMLElement) {
    jet.style.display = 'block';
}


//* Applying helpers
function hideJetAsientos() {
    jetAsientos.forEach((jet) => {
        jet && hideJet(jet as HTMLElement);
    })
}
// hideJetAsientos() //👍

function hideJetAccordions() {
    jetAccordions.forEach((jet) => {
       jet && hideJet(jet as HTMLElement);
    })
}
// hideJetAccordions() //👍


//Ocultar TODOS los que existen en el 🌎
function hideAllJets() {
    hideJetAsientos();
    hideJetAccordions();
}
// hideAllJets() //👍




//* Event Handlers
function handleAccordionOpen(index: number) {
    
}

function handleAccordionClose(index: number) {
   
}

//* Event Listeners
accordionsOnCards.forEach((accordion, index) => {
    accordion?.addEventListener('click', () => {
        if (accordion?.ariaExpanded === 'true') {
            console.log('open', index)
        } else {
            console.log('close', index)
        }
    })
});