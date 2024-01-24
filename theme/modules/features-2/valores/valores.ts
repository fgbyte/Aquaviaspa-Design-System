
document.addEventListener('DOMContentLoaded', () => {
  //Valores module
  const tabsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`valor-${i + 1}`));
  const modalsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`modal-valor-${i + 1}`));
  const detailsValores = Array.from({ length: 5 }, (_, i) => document.getElementById(`detail-valor-${i + 1}`));
  const buttonValores = document.querySelectorAll('.link-arrow-grow-white-reverse');
  const allDropdowns = document.querySelectorAll('.valores__card__links details');

  //ocultar los modales al principio menos el 1
  modalsValores.forEach((modal, i) => {
    if (modal) {
      modal.style.display = i === 0 ? 'block' : 'none';
    }
  });

  //duplicar contenido modales y details
  modalsValores.forEach((modal, i) => {
    if (modal && detailsValores[i]) {
      let modalContent = modal.innerHTML;
      if (detailsValores[i]) {
        detailsValores[i]!.innerHTML = modalContent;
      }
    }
  });

  let activeTab: HTMLElement | null = buttonValores[0] as HTMLElement;

  if (activeTab) {
    activeTab.classList.add('active-valor');
  }


  function clickedValores(tab: HTMLElement) {
    if (tab.classList.contains('active-valor') && innerWidth < 990) {
      tab.classList.remove('active-valor');
      activeTab = null;
    } else {
      if (activeTab) {
        activeTab.classList.remove('active-valor');
      }
      tab.classList.add('active-valor');
      activeTab = tab;
    }
  }

  buttonValores.forEach((tab, i) => {
    if (tab) {
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


  // Función para cerrar todos los dropdowns excepto el actual
  function closeAllDropdownsExcept(currentDropdown: HTMLElement) {
    allDropdowns.forEach(dropdown => {
      if (dropdown !== currentDropdown && dropdown.hasAttribute('open')) {
        dropdown.removeAttribute('open');
      }
    });
  }

  // Agregar el controlador de eventos a cada 'details'
  allDropdowns.forEach(dropdown => {
    dropdown.addEventListener('toggle', () => {
      if (dropdown.hasAttribute('open')) {
        closeAllDropdownsExcept(dropdown as HTMLElement);
      }
    });
  });
});

