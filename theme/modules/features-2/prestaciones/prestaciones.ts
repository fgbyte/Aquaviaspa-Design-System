//prestaciones module
document.addEventListener('DOMContentLoaded', () => {
const filterLinks = Array.from({ length: 5 }, (_, i) => document.querySelectorAll(`#fil-${i + 1}`));
const categories = Array.from({ length: 5 }, (_, i) => document.querySelectorAll(`#category-${i + 1}`));


filterLinks.forEach((nodeLink) => {
    nodeLink.forEach((link) => {
        link.addEventListener('click', (event) => {
            showOnly(0);//muestra la card 1
            // Remove 'checked' attribute from all filter links
            filterLinks.forEach((otherLink) => {
                otherLink.forEach((element) => {
                   element.removeAttribute('checked');
                });
            });
 
            // Add 'checked' attribute to the clicked link
            const clickedLink = event.target as HTMLElement;
            clickedLink.setAttribute('checked', '');
        });
    });
 });
})