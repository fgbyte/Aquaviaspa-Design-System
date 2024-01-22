  // Obtiene referencias a los formularios
  const formContacto = document.getElementById('form-contacto') as HTMLFormElement;
  const formDistribuidor = document.getElementById('form-distribuidor') as HTMLFormElement;

  // Obtiene referencias a los enlaces de filtro
  const linkContacto = document.getElementById('fil-1') as HTMLAnchorElement;
  const linkDistribuidor = document.getElementById('fil-2') as HTMLAnchorElement;

  // Escucha los clics en los enlaces de filtro
  linkContacto.addEventListener('click', () => {
    // Muestra el formulario de contacto y oculta el de distribuidor
    formContacto.style.display = 'flex';
    formDistribuidor.style.display = 'none';
  });

  linkDistribuidor.addEventListener('click', () => {
    // Muestra el formulario de distribuidor y oculta el de contacto
    formContacto.style.display = 'none';
    formDistribuidor.style.display = 'flex';
  });