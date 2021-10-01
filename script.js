const mainSection = document.querySelector('#main-section');
const secondSection = document.querySelector('#second-section');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];
const input = document.createElement('input');
const thirdSection = document.querySelector('#third-section');
const counter = document.createElement('p');
counter.id = ('carta-contador');
counter.innerHTML = 0;
thirdSection.appendChild(counter);
input.id = ('carta-texto');
mainSection.appendChild(input);
const paragraph = document.createElement('p');
paragraph.id = ('carta-gerada');
secondSection.appendChild(paragraph);
const button = document.createElement('button');
button.id = ('criar-carta');
button.innerHTML = ('Gerar carta');
mainSection.appendChild(button);

function styleGenerator() {
  const newStyle = style[Math.floor(Math.random() * style.length)];
  const newSize = size[Math.floor(Math.random() * size.length)];
  const newRotate = rotate[Math.floor(Math.random() * rotate.length)];
  const newInclination = inclination[Math.floor(Math.random() * inclination.length)];
  return `${newStyle} ${newSize} ${newRotate} ${newInclination}`;
}

function createLetter() {
  if (input.value.trim().length === 0) {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragraph.innerHTML = '';
    const words = input.value.split(' ');
    counter.innerHTML = words.length;

    for (let i = 0; i < words.length; i += 1) {
      const misteryLetter = document.createElement('span');
      misteryLetter.innerHTML = words[i];
      misteryLetter.className = styleGenerator();
      paragraph.appendChild(misteryLetter);
    }
  }
}

button.addEventListener('click', createLetter);
