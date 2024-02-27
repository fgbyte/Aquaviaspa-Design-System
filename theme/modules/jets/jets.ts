
document.querySelectorAll('.accordion-item').forEach(item => {
  if (item.classList.contains('show')) {
    const accordionContainer = item.closest('.accordion');

    accordionContainer?.querySelectorAll('.accordion-item').forEach(siblingItem => {
      if (siblingItem !== item) {
        siblingItem.classList.toggle('hidden');
      }
    });
  }
});