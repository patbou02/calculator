import 'normalize.css';

document.addEventListener('DOMContentLoaded', () => {

  const calculator = document.querySelector('.calculator__keys');
  const display = document.querySelector('.calculator__display');

  calculator.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', e => {

      const keyValue = e.target.textContent;

      (display.textContent === '0') ? display.textContent = keyValue : display.textContent += keyValue;
    });
  });


  //console.log(display);

});
