document.addEventListener('DOMContentLoaded', () => {
  //Valores module
  const tabsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`valor-${i + 1}`));
  const modalsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`modal-valor-${i + 1}`));
  const buttonValores = document.querySelectorAll('.link-arrow-grow-white-reverse');

  //ocultar los modales al principio menos el 1
  modalsValores.forEach((modal, i) => {
    if (modal) {
      modal.style.display = i === 0 ? 'block' : 'none';
    }
  });

  let activeTab: HTMLElement | null = buttonValores[0] as HTMLElement;

if (activeTab) {
    activeTab.classList.add('active-valor');
}

  function clickedValores(tab: HTMLElement) {
    if (activeTab) {
      activeTab.classList.remove('active-valor');
    }

    tab.classList.add('active-valor');
    activeTab = tab;
  }

  buttonValores.forEach((tab, i) => {
    if(tab) {
      tab.addEventListener('click', () => {
        clickedValores(tab as HTMLElement);
      })
    }
  })

  //agregar eventListener a las tabsValores
  tabsValores.forEach((tab, i) => {
    if (tab) {
      tab.addEventListener('click', () => {
        modalsValores.forEach((modal, j) => {
          if (modal) {
            modal.style.display = i === j ? 'block' : 'none';
          }
        });
      });
    }
  });
});