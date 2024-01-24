const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
const desktopMediaQuery = window.matchMedia('(min-width: 768px)');

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card-spa');
  const loadMoreButton = document.getElementById('loadMore') as HTMLElement;

  function showHiddenCards() {
    cards.forEach((card, index) => {
      if (index >= 6) {
        card.classList.remove('hidden-card');
      }
    });
  }

  function hideLoadMore() {
    loadMoreButton.style.display = 'none';
  }
  function showLoadMore() {
    loadMoreButton.style.display = 'flex';
  }

  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', showHiddenCards);
    loadMoreButton.addEventListener('click', hideLoadMore);
  }


  mobileMediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
      cards.forEach((card, index) => {
        showLoadMore()
        if (index >= 6) {
          card.classList.add('hidden-card');
        }
      });
    }
  })

  desktopMediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
      showHiddenCards()
    }
  })

  if (window.innerWidth <= 768) {
    cards.forEach((card, index) => {
      if (index >= 6) {
        card.classList.add('hidden-card');
      }
    });
  }
});