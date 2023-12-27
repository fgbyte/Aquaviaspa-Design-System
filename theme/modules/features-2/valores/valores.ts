//Valores module
const tabsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`valor-${i+1}`));
const modalsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`modal-valor-${i+1}`));

//ocultar los modales al principio menos el 1
modalsValores.forEach((modal, i) => {
  if(modal){
    modal.style.display = i === 0 ? 'block' : 'none';
  }
});

//agregar eventListener a las tabsValores
tabsValores.forEach((tab, i) => {
    if(tab){
        tab.addEventListener('click', () => {
          modalsValores.forEach((modal, j) => {
            if(modal){
                modal.style.display = i === j ? 'block' : 'none';
            }
          });
        });
    }
});