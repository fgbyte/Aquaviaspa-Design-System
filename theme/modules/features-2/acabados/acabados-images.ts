const furnitureInputs = document.querySelectorAll<HTMLInputElement>('.furniture-input');
const helmetInputs = document.querySelectorAll<HTMLInputElement>('.helmet-input');
const imgs = document.querySelectorAll<HTMLImageElement>('.acabados__content__imgs img');

function updateImages(): void {
  imgs.forEach((img) => {
    img.style.display = 'none';
  });

  furnitureInputs.forEach((input, index) => {
    if (input.checked) {
      const startIndex = Math.floor(index * imgs.length / furnitureInputs.length);
      const endIndex = Math.floor(startIndex + imgs.length / furnitureInputs.length - 1);

      for (let i = startIndex; i <= endIndex && i < imgs.length; i++) {
        imgs[i].style.display = 'block';
      }
    }
  });
}

function showFirstImage(): void {
  helmetInputs.forEach((input, index) => {
    const startIndex = Math.floor(index * imgs.length / helmetInputs.length);
    const endIndex = Math.floor(startIndex + imgs.length / helmetInputs.length - 1);

    imgs[startIndex].style.display = input.checked ? 'block' : 'none';

    for (let i = startIndex + 1; i <= endIndex && i < imgs.length; i++) {
      imgs[i].style.display = 'none';
    }
  });

  updateImages();
}

furnitureInputs.forEach((input) => {
  input.addEventListener('change', showFirstImage);
});

helmetInputs.forEach((input) => {
  input.addEventListener('change', showFirstImage);
});

showFirstImage();