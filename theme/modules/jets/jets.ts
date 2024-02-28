document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const accordionBody = button.closest('.accordion-item');
      const accordionContainer = accordionBody?.closest('.accordion');
  
      accordionContainer?.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionBody) {
          item.classList.toggle('hidden');
        }
      });
    });
  });
})