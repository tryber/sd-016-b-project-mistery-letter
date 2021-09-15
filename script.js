// Funcao para criar elementos fora do dom, recebe como parametros respectivamente o tipo do elemento, o texto, as classes, e o id, se passar '' como parametro ele nao adiciona o parametro em questao.
function newChild(type, text, classs, id) {
  const newChildItem = document.createElement(type);
  newChildItem.innerText = text;
  if (classs !== '') {
    newChildItem.className = classs;
  }
  if (id !== '') {
    newChildItem.id = id;
  }
  return newChildItem;
}

// Verifica se possui apenas espacos em branco no input
function verifyWhiteSpaces(arrayText) {
  let index = 0;
  for (index = 0; index < arrayText.length; index += 1) {
    if (arrayText[index] !== '') {
      break;
    }
  }
  if (index === arrayText.length) {
    return true;
  }
  return false;
}

// Gera classes aleatoria
function generateRandomClass() {
  const objectGroup = {
    style: {0: '', 1: 'newspaper', 2: 'magazine1', 3: 'magazine2',},
    size: {0: '', 1: 'medium', 2: 'big', 3: 'reallybig',},
    rotation: {0: '', 1: 'rotateleft', 2: 'rotateright',},
    inclination: {0: '', 1: 'skewleft', 2: 'skewright',},};
  const arrayObject = Object.values(objectGroup);
  let classList = '';
  let randomNumber;
  for (let index = 0; index < arrayObject.length; index += 1) {
    const arrayObjectInterno = Object.values(arrayObject[index]);
    randomNumber = Math.floor(Math.random() * arrayObjectInterno.length);
    if (randomNumber > 0) {
      if (classList !== '') {
        classList += ' ';
      }
      classList += arrayObjectInterno[randomNumber];
    }
  }
  return classList;
}

// Coloca todas as palavras no paragrafo, retirando whiteSpaces
function setSpans(pBlock, arrayText) {
  for (let index = 0; index < arrayText.length; index += 1) {
    if (arrayText[index] !== '') {
      pBlock.append(newChild('span', arrayText[index], generateRandomClass(), ''));
    }
  }
}

// Deleta todos os spans previamente existentes
function deleteSpan(pBlock) {
  while (pBlock.firstChild) {
    pBlock.removeChild(pBlock.firstChild);
  }
}

// Conta a quantidade de spans existentes
function spanCount() {
  const spans = document.querySelectorAll('span');
  document.querySelector('#carta-contador').innerHTML = spans.length;
}

// Evento que acontece quando aperto o botao gerar carta
document.querySelector('#criar-carta').addEventListener('click', () => {
  const pBlock = document.querySelector('#carta-gerada');
  const inputText = document.querySelector('#carta-texto');
  const arrayText = inputText.value.split(' ');
  const whiteSpaces = verifyWhiteSpaces(arrayText);
  if (whiteSpaces) {
    pBlock.append(newChild('span', 'por favor, digite o conteúdo da carta.', '', ''));
  } else {
    deleteSpan(pBlock);
    setSpans(pBlock, arrayText);
  }
  spanCount();
  const spanStyle = document.querySelectorAll('span');
  for (let index = 0; index < spanStyle.length; index += 1) {
    spanStyle[index].addEventListener('click', (event) => {
      const evt = event.target;
      evt.classList = generateRandomClass();
    });
  }
});
