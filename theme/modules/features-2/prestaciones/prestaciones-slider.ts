const prestacionesCards: NodeListOf<Element> = document.querySelectorAll(".prestaciones-cards")
const guiasPrestacionesCards: NodeListOf<Element> = document.querySelectorAll(".guias-prestaciones-cards")

prestacionesCards.forEach((carousel: Element, carouselIndex: number) => {
  const controls: Element = guiasPrestacionesCards[carouselIndex];
  const controlItems: NodeListOf<Element> = controls.querySelectorAll(".controls-prestaciones-cards");

  setActiveControl(0);

  function setActiveControl(index: number): void {
    controlItems.forEach((item: Element, i: number) => {
      if (i === index) {
        item.classList.add("control-prestaciones-active");
      } else {
        item.classList.remove("control-prestaciones-active");
      }
    });
  }


  controlItems.forEach((item: Element, index: number) => {
    item.addEventListener("click", () => {
      moveItems(index)
    });
  });

  const moveItems = (index: number): void => {
    const cardWidth: HTMLElement | null = carousel.querySelector(".card-prestacion");

    if (cardWidth) {
      carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
    }
  }

  carousel.addEventListener("scroll", () => {
    const cardWidth: any = carousel.querySelector(".card-prestacion");
    if (carousel === null || !cardWidth) return

    const scrollPos: number = carousel.scrollLeft;
    const activeControlIndex: number = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
    setActiveControl(activeControlIndex);
  });

});