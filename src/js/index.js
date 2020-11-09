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

        let num1 = parseInt(display.textContent);
        // console.log(num1);
        // console.log(keyValue);

      }

      if (keyType === 'equal') {
        // perform a calculation
      }

      calculator.dataset.prevKeytype = keyType;
    });
  });


  //console.log(display);

});
