
const textInStep = document.querySelectorAll('.dynamic-step') as NodeListOf<HTMLElement>;
const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="radio"]');


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

setStepValue();