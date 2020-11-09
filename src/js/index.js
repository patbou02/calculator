import 'normalize.css';

document.addEventListener('DOMContentLoaded', () => {

  const calculator = document.querySelector('.calculator');
  const display    = calculator.querySelector('.calculator__display');

  calculator.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', e => {

      const key = e.target;
      const keyValue = key.textContent;
      const keyType = key.dataset.type;
      const { prevKeytype } = calculator.dataset;

      // Is this a number key?
      if (keyType === 'number') {
        ((display.textContent === '0') || (prevKeytype === 'operator')) ?
          display.textContent = keyValue : display.textContent += keyValue;
      }

      // Is this an operator key?
      if (keyType ===  'operator') {
        calculator.querySelectorAll('[data-type="operator"]').forEach(keyOperator => keyOperator.dataset.state = '');
        key.dataset.state = 'selected';

        calculator.dataset.firstNum = display.textContent;
        calculator.dataset.operator = key.classList.value;
      }

      if (keyType === 'equal') {
        calculator.querySelectorAll('[data-type="operator"]').forEach(keyOperator => keyOperator.dataset.state = '');

        const secondNum = display.textContent;
        const firstNum  = calculator.dataset.firstNum;
        const operator  = calculator.dataset.operator;

        display.textContent = calculate(firstNum, secondNum, operator);
      }

      calculator.dataset.prevKeytype = keyType;
    });
  });

  function calculate(a, b, operation) {
    a = parseInt(a);
    b = parseInt(b);

    console.log(`${a} ${operation} ${b} equals ${result}`);

    if (operation === 'plus') return a + b;
    if (operation === 'minus') return a - b;
    if (operation === 'times') return a * b;
    if (operation === 'divide') return a / b;
  }

});
