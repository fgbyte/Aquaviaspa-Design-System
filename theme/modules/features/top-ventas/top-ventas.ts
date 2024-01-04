document.addEventListener('DOMContentLoaded', function () {
  const prestacionesGroups: NodeListOf<Element> = document.querySelectorAll(".prestaciones-cards");
  const guiasPrestacionesGroups: NodeListOf<Element> = document.querySelectorAll(".guias-prestaciones-cards");

  prestacionesGroups.forEach((prestaciones, groupIndex) => {
    const controls: Element = guiasPrestacionesGroups[groupIndex];
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
        moveItems(index, prestaciones);
      });
    });

    const moveItems = (index: number, carousel: Element): void => {
      const cardWidth: HTMLElement | null = carousel.querySelector(".card-prestacion");

      if (cardWidth) {
        carousel.scroll({ left: cardWidth.offsetWidth * index, behavior: "smooth" });
      }
    }

    prestaciones.addEventListener("scroll", () => {
      const cardWidth: any = prestaciones.querySelector(".card-prestacion");
      if (prestaciones === null || !cardWidth) return;

      const scrollPos: number = prestaciones.scrollLeft;
      const activeControlIndex: number = Math.floor(scrollPos / (cardWidth.offsetWidth - 70));
      setActiveControl(activeControlIndex);
    });
  });
});
