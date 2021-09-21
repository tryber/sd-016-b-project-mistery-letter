const buttonCreateText = document.getElementById('criar-carta');
const textArea = document.getElementById('carta-gerada');

const classStyle = ['newspaper', 'magazine1', 'magazine2'];
const classSize = ['medium', 'big', 'reallybig'];
const classRotation = ['rotateright', 'rotateleft'];
const classInclination = ['skewleft', 'skewright'];
function randomClasseStyle() {
  const classeS = `${classStyle[parseInt(Math.random() * classStyle.length)]} `;
  return classeS;
}

function randomClasseSize() {
  const classeS = `${classSize[parseInt(Math.random() * classSize.length)]} `;
  return classeS;
}

function randomClasseRotation() {
  const classeS = `${classRotation[parseInt(Math.random() * classRotation.length)]} `;
  return classeS;
}

function randomClasseInclination() {
  const classeS = `${classInclination[parseInt(Math.random() * classInclination.length)]}`;
  return classeS;
}

// Função para checar se o input está vazio ou se é apeas expaço em branco.
function checkInput() {
  const inputText = document.getElementById('carta-texto').value;
  let countSpaces = 0;
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index] === ' ') {
      countSpaces += 1;
    }
  }
  if (countSpaces === inputText.length) {
    textArea.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

// Evento botão para adicionar o texto
buttonCreateText.addEventListener('click', () => {
  const inputText = document.getElementById('carta-texto').value;
  textArea.innerText = '';
  checkInput();
  if (textArea.innerText === '') {
    const textoQuebrado = inputText.split(' ');
    for (let index = 0; index < textoQuebrado.length; index += 1) {
      randomClasseStyle();
      const spanText = document.createElement('span');
      spanText.className = randomClasseStyle();
      spanText.className += randomClasseSize();
      spanText.className += randomClasseRotation();
      spanText.className += randomClasseInclination();
      spanText.innerText = `${textoQuebrado[index]} `;
      textArea.appendChild(spanText);
    }
  }
});
