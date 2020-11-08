import 'normalize.css';

document.addEventListener('DOMContentLoaded', () => {

  const calculator = document.querySelector('.calculator__keys');
  calculator.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', e => {
      console.log(e.target.classList[1]);
    });
  });
  
});
