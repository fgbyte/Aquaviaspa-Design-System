//transform module
const cardTransform = document.querySelector("#card-transform")
const cardTransformRight = document.querySelector(".card-transform-right")

document.addEventListener('DOMContentLoaded', () => {
  cardTransformRight.addEventListener('mouseover', (e) => {
    if (window.innerWidth > 993) {
      cardTransform.classList.add('opac')
    }
  })
  cardTransformRight.addEventListener('mouseout', (e) => {
    cardTransform.classList.remove('opac')
  })
})




