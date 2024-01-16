document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card-spa');
  const loadMoreButton = document.getElementById('loadMore') as HTMLElement;

  function showHiddenCards() {
    cards.forEach((card, index) => {
      if (index >= 6) {
        card.classList.toggle('hidden-card');
      }
    });
  }

  loadMoreButton.addEventListener('click', showHiddenCards);

  if (window.innerWidth <= 768) {
    cards.forEach((card, index) => {
      if (index >= 6) {
        card.classList.add('hidden-card');
      }
    });
  }
});