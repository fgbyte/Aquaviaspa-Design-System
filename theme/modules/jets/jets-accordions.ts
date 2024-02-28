const allModelImages = document.querySelectorAll('.jets-model-accordion') as NodeListOf<HTMLElement>
const allModelImagesDefault = document.querySelectorAll('.jets-model-accordion-default') as NodeListOf<HTMLElement>
const allAccordions = document.querySelectorAll('.accordion-button') as NodeListOf<HTMLButtonElement>

allAccordions?.forEach((accordion, index) => {

    accordion.addEventListener('click', () => {
        allModelImages.forEach((image) => {
            image.style.display = 'none';
        })
        allModelImagesDefault.forEach((image) => {
            image.style.display = 'none';
        })

        allModelImages[index].style.display = 'block';

    })

})

document.querySelectorAll('.accordion-collapse')?.forEach(collapse => {
    collapse.addEventListener('hidden.bs.collapse', () => {
        allModelImages.forEach((image) => {
            image.style.display = 'none';
        })
        allModelImagesDefault.forEach((image) => {
            image.style.display = 'block';
        })
    });
});
