// Calculator app by Olaa Dabbour

let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

displayCalculation();

document.querySelector('.toggle-button').addEventListener('click', () => lightMode());

function lightMode() {
  document.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('button-light')
  });
  document.querySelector('.output').classList.toggle('output-light');
  document.body.classList.toggle('body-light');
  document.querySelector('.toggle-button').classList.toggle('light-mode-button');

  changeImg();
}

function changeImg() {
  let img = document.querySelector('.image');
  let imgSrc = document.querySelector('.image').src;
  
  if (imgSrc.includes('moon')) {
    img.src = 'images/sun.png';
    img.classList.remove('moon');
    img.classList.add('sun');
  }
  else if (imgSrc.includes('sun')) {
    img.src = 'images/moon.png';
    img.classList.remove('sun');
    img.classList.add('moon');
  }
}

function buttonPush(input) {
  if (input === 'clear') {
    calculation = '';
  }
  else if (input === '=') {
    let result = eval(calculation);
    if (result.toString().length > 13) {
      result = result.toFixed(3);
    }
    calculation = result;
  }
  else if (input === 'delete') {
    let deleted = calculation.slice(0, -1);
    calculation = deleted;
  }
  else if (calculation.length > 13)
  {
    calculation = calculation;
  }
  else {
    calculation += input;
  }

  localStorage.setItem('calculation', JSON.stringify(calculation));

  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-output').innerHTML = calculation;
}

// Event listeners for button pushes
document.querySelector('.js-clear').addEventListener('click', () => {
  buttonPush('clear');
})

document.querySelector('.js-delete').addEventListener('click', () => {
  buttonPush('delete');
})

document.querySelector('.js-divide').addEventListener('click', () => {
  buttonPush('/');
})

document.querySelector('.js-seven').addEventListener('click', () => {
  buttonPush('7');
})

document.querySelector('.js-eight').addEventListener('click', () => {
  buttonPush('8');
})

document.querySelector('.js-nine').addEventListener('click', () => {
  buttonPush('9');
})

document.querySelector('.js-multiply').addEventListener('click', () => {
  buttonPush('*');
})

document.querySelector('.js-four').addEventListener('click', () => {
  buttonPush('4');
})

document.querySelector('.js-five').addEventListener('click', () => {
  buttonPush('5');
})

document.querySelector('.js-six').addEventListener('click', () => {
  buttonPush('6');
})

document.querySelector('.js-subtract').addEventListener('click', () => {
  buttonPush('-');
})

document.querySelector('.js-one').addEventListener('click', () => {
  buttonPush('1');
})

document.querySelector('.js-two').addEventListener('click', () => {
  buttonPush('2');
})

document.querySelector('.js-three').addEventListener('click', () => {
  buttonPush('3');
})

document.querySelector('.js-add').addEventListener('click', () => {
  buttonPush('+');
})

document.querySelector('.js-zero').addEventListener('click', () => {
  buttonPush('0');
})

document.querySelector('.js-decimal').addEventListener('click', () => {
  buttonPush('.');
})

document.querySelector('.js-equal').addEventListener('click', () => {
  buttonPush('=');
})

// Event listener for keyboard inputs
document.body.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    buttonPush('1');
  }
  else if (event.key === '2') {
    buttonPush('2');
  }
  else if (event.key === '3') {
    buttonPush('3');
  }
  else if (event.key === '4') {
    buttonPush('4');
  }
  else if (event.key === '5') {
    buttonPush('5');
  }
  else if (event.key === '6') {
    buttonPush('6');
  }
  else if (event.key === '7') {
    buttonPush('7');
  }
  else if (event.key === '8') {
    buttonPush('8');
  }
  else if (event.key === '9') {
    buttonPush('9');
  }
  else if (event.key === '0') {
    buttonPush('0');
  }
  else if (event.key === '+') {
    buttonPush('+');
  }
  else if (event.key === '-') {
    buttonPush('-');
  }
  else if (event.key === '/') {
    buttonPush('/');
  }
  else if (event.key === '*') {
    buttonPush('*');
  }
  else if (event.key === 'Enter') {
    buttonPush('=');
  }
  else if (event.key === '.') {
    buttonPush('.');
  }
  else if (event.key === 'Backspace') {
    buttonPush('delete');
  }
  else if (event.key === 'Delete' || event.key === 'c') {
    buttonPush('clear');
  }
})