// const jetAsientos = Array.from({ length: 15 }, (_, i) => document.querySelector(`#jet-${i + 1}`));
// const jetAccordions = Array.from({ length: 30 }, (_, i) => document.querySelector(`#jet-accordion-${i + 1}`));
// const accordionsOnCards = Array.from({ length: 30 }, (_, i) => document.querySelector(`#accordion-${i + 1}`));

// console.log(jetAsientos)

// //* Functions helpers
// // Funciones para ocultar y mostrar jet
// function hideJet(jet: HTMLElement) {
//     jet.style.display = 'none';
// }

// function showJet(jet: HTMLElement) {
//     jet.style.display = 'block';
// }


// //* Core Functions
// function hideJetAsientos() {
//     jetAsientos.forEach((jet) => {
//         jet && hideJet(jet as HTMLElement);
//     })
// }

// function showJetAsientos() {
//     jetAsientos.forEach((jet) => {
//         jet && showJet(jet as HTMLElement);
//     })
// }


// function hideJetAccordions() {
//     jetAccordions.forEach((jet) => {
//        jet && hideJet(jet as HTMLElement);
//     })
// }

// //Ocultar TODOS los que existen en el 🌎
// function hideAllJets() {
//     hideJetAsientos();
//     hideJetAccordions();
// }


// //* Applying Functions
// hideAllJets()
// showJetAsientos()





// //* Event Handlers
// function handleAccordionOpen(index: number) {
    
// }

// function handleAccordionClose(index: number) {
   
// }

// //* Event Listeners
// accordionsOnCards.forEach((accordion, index) => {
//     accordion?.addEventListener('click', () => {
//         if (accordion?.ariaExpanded === 'true') {
//             console.log('open', index)
//             // handleAccordionOpen(index)
//         } else {
//             console.log('close', index)
//         }
//     })
// });