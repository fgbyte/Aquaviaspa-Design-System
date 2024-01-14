//prestaciones module
document.addEventListener('DOMContentLoaded', () => {
const filterLinks = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`#fil-${i + 1}`));
const categories = Array.from({ length: 6 }, (_, i) => document.querySelectorAll(`#category-${i + 1}`));

//links logic
filterLinks.forEach((nodeLink) => {
    nodeLink.forEach((link) => {
        link.addEventListener('click', (event) => {
            if (window.matchMedia(`(min-width: ${special}px)`).matches) {
                showOnly(0)//el 1ro del array
            }
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

 //only 1 first logic
 categories.forEach((nodeCat, index) => {
    nodeCat.forEach((singleCat) => {
        if (singleCat instanceof HTMLElement) {
            singleCat.style.display = index === 0
                ? 'flex'
                : 'none';
        }
    })
 })

 //render logic
 filterLinks.forEach((nodeLink, i) => {
     nodeLink.forEach((singleLink, _) => {
        singleLink.addEventListener('click', () => {
            categories.forEach((nodeCat, j) => {
                if (nodeCat) {
                    nodeCat.forEach((singleCat, __) => {
                        if (singleCat instanceof HTMLElement) {
                            singleCat.style.display = i === j
                                ? 'flex'
                                : 'none';
                        }
                    })
                }
            })
        })
     })
 })
})