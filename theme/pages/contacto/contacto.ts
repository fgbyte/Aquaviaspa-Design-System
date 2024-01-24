
const formContacto = document.getElementById('form-contacto') as HTMLFormElement;
const formDistribuidor = document.getElementById('form-distribuidor') as HTMLFormElement;

const linkContacto = document.getElementById('fil-1') as HTMLAnchorElement;
const linkDistribuidor = document.getElementById('fil-2') as HTMLAnchorElement;

document.addEventListener('DOMContentLoaded', () => {
  if (linkContacto) {
    linkContacto.addEventListener('click', () => {
      if (formContacto && formDistribuidor) {
        formContacto.style.display = 'flex';
        formDistribuidor.style.display = 'none';
      }
    });
  }

  if (linkDistribuidor) {
    linkDistribuidor.addEventListener('click', () => {
      if (formContacto && formDistribuidor) {
        formContacto.style.display = 'none';
        formDistribuidor.style.display = 'flex';
      }
    });
  }
})