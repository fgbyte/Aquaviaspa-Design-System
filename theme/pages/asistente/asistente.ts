
const textInStep = document.querySelectorAll('.dynamic-step') as NodeListOf<HTMLElement>;
const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll('.asistente-radio');
const firstRadios: NodeListOf<HTMLInputElement> = document.querySelectorAll('.type-spa-selected-radio');
const spaSelected: NodeListOf<HTMLInputElement> = document.querySelectorAll('.type-spa-selected');
const steps = document.querySelectorAll('.step') as NodeListOf<HTMLElement>;

const stepValue = {
  step1: '',
  step2: '',
  step3: '',
  step4: '',
  step5: '',
}


function updateTextsFromStepValues() {
  textInStep.forEach((step, index) => {
    const stepKey = `step${index + 1}` as keyof typeof stepValue;
    if (stepValue[stepKey]) {
      step.innerText = stepValue[stepKey];

      steps[index].classList.add('step--active');
    } else {
      steps[index].classList.remove('step--active');
    }
  });
}

function setStepValue() {
  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      const stepIndex = Math.floor(index / 3) + 1;
      const stepKey = `step${stepIndex}` as keyof typeof stepValue;
      stepValue[stepKey] = radio.value;
      updateTextsFromStepValues();
    });
  });
}

firstRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    spaSelected.forEach((element) => {
      element.innerText = radio.value;
    });
  });
});

setStepValue();
