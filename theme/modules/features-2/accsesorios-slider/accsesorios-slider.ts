const accseoriosSlider: NodeListOf<Element> = document.querySelectorAll(".accseorios-slider")
const guiasAccseoriosSlider: NodeListOf<Element> = document.querySelectorAll(".guias-accseorios-slider")

accseoriosSlider.forEach((carousel: Element, carouselIndex: number) => {
  const controls: Element = guiasAccseoriosSlider[carouselIndex];
  const controlItems: NodeListOf<Element> = controls.querySelectorAll(".controls-accseorios-slider");

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
    const cardWidth: HTMLElement | null = carousel.querySelector(".card-accesorios");

    if (cardWidth) {
      carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
    }
  }

  carousel.addEventListener("scroll", () => {
    const cardWidth: any = carousel.querySelector(".card-accesorios");
    if (carousel === null || !cardWidth) return

    const scrollPos: number = carousel.scrollLeft;
    const activeControlIndex: number = Math.floor(scrollPos / (cardWidth.offsetWidth - 20));
    setActiveControl(activeControlIndex);
  });

});
