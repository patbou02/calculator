import 'normalize.css';

document.addEventListener('DOMContentLoaded', () => {

  // 1. detect keypress
  const calculator = document.querySelector('.calculator__keys');
  const keys = calculator.querySelectorAll('button');

  keys.forEach((key) => {
    //console.log(key.dataset.key);
    key.addEventListener('click', function (e) {
      console.log(e.target.dataset.key);
    });
  });

  // 2. operations:
  // addition
  // subtraction
  // multiplication
  // division
  // percentage
  // clear/reset

});
