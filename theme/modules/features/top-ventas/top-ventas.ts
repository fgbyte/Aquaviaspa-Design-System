const carouselsTopVentas: NodeListOf<Element> = document.querySelectorAll(".top-ventas__container")
const controlsList1: NodeListOf<Element> = document.querySelectorAll(".guias-top-ventas")

carouselsTopVentas.forEach((carousel: Element, carouselIndex: number) => {
  const controls: Element = controlsList1[carouselIndex];
  const controlItems: NodeListOf<Element> = controls.querySelectorAll(".controls-top-ventas");

  setActiveControl(0);

  function setActiveControl(index: number): void {
    controlItems.forEach((item: Element, i: number) => {
      if (i === index) {
        item.classList.add("control-active");
      } else {
        item.classList.remove("control-active");
      }
    });
  }


  controlItems.forEach((item: Element, index: number) => {
    item.addEventListener("click", () => {
      moveItems(index)
    });
  });

  const moveItems = (index: number): void => {
    const cardWidth: HTMLElement | null = carousel.querySelector(".card-spa");

    if (cardWidth) {
      carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
    }
  }

  carousel.addEventListener("scroll", () => {
    const cardWidth: any = carousel.querySelector(".card-spa");
    if (carousel === null || !cardWidth) return

    const scrollPos: number = carousel.scrollLeft;
    const activeControlIndex: number = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
    setActiveControl(activeControlIndex);
  });

});
