//transform module
const cardTransform = document.querySelector("#card-transform")
const cardTransformRight = document.querySelector(".card-transform-right")
const transformModule = document.querySelector(".transform-module")

document.addEventListener('DOMContentLoaded', () => {
	if (cardTransformRight) {
		cardTransformRight.addEventListener('mouseover', (e) => {
			if (window.innerWidth > 993) {
				if (cardTransform) {
					cardTransform?.classList.add('opac')
				}
			}
		})
		cardTransformRight.addEventListener('mouseout', (e) => {
			if (cardTransform) {
				cardTransform?.classList.remove('opac')
			}
		})
	}
})