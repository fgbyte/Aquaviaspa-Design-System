const blogPostSlider: NodeListOf<Element> = document.querySelectorAll(".blog-post-slider")
const guiasBlogPostSlider: NodeListOf<Element> = document.querySelectorAll(".guias-blogPostSlider")

blogPostSlider.forEach((carousel: Element, carouselIndex: number) => {
  const controls: Element = guiasPrestacionesSliderSlider[carouselIndex];
  const controlItems: NodeListOf<Element> = controls.querySelectorAll(".controls-blogPostSlider");
  const previousItem = document?.querySelector(".arrow-prestaciones-slider-left");
  const nextItem = document?.querySelector(".arrow-prestaciones-slider-right");

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

  nextItem?.addEventListener("click", (): void => {
    const cardWidth: HTMLElement | null = carousel.querySelector(".card-category-blog-lite");
    if (carousel && cardWidth) {
      const newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) + 1;
      moveItems(newIndex);
    }
  });
  previousItem?.addEventListener("click", (): void => {
    const cardWidth: HTMLElement | null = carousel.querySelector(".card-category-blog-lite");
    if (carousel && cardWidth) {
      const newIndex = Math.floor(carousel.scrollLeft / cardWidth.offsetWidth) - 1;
      moveItems(newIndex);
    }
  });

  controlItems.forEach((item: Element, index: number) => {
    item.addEventListener("click", () => {
      moveItems(index)
    });
  });

  const moveItems = (index: number): void => {
    const cardWidth: HTMLElement | null = carousel.querySelector(".card-category-blog-lite");

    if (cardWidth) {
      carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
    }
  }

  carousel.addEventListener("scroll", () => {
    const cardWidth: any = carousel.querySelector(".card-category-blog-lite");
    if (carousel === null || !cardWidth) return

    const scrollPos: number = carousel.scrollLeft;
    const controlIndex: number = Math.floor(scrollPos / cardWidth.offsetWidth);
    setActiveControl(controlIndex);
  });

});