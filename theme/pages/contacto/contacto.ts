  
  const formContacto = document.getElementById('form-contacto') as HTMLFormElement;
  const formDistribuidor = document.getElementById('form-distribuidor') as HTMLFormElement;

  const linkContacto = document.getElementById('fil-1') as HTMLAnchorElement;
  const linkDistribuidor = document.getElementById('fil-2') as HTMLAnchorElement;

  linkContacto.addEventListener('click', () => {
    formContacto.style.display = 'flex';
    formDistribuidor.style.display = 'none';
  });

  linkDistribuidor.addEventListener('click', () => {
    formContacto.style.display = 'none';
    formDistribuidor.style.display = 'flex';
  });