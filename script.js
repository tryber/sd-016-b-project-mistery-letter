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
	for (index = 0; index < arrayText.length; index += 1) {
		if (arrayText[index] !== '') {
			break;
		}
	}
	if (index === arrayText.length) {
		return true;
	} else {
		return false;
	}
}

// Gera classes aleatoria
function generateRandomClass() {
	const styleGroup = ['', 'magazine1 ', 'magazine2 '];
	const sizeGroup = ['', 'medium ', 'big ', 'reallybig '];
	const rotationGroup = ['', 'rotateleft ', 'rotateright '];
	const inclinationGroup = ['', 'skewleft ', 'skewright '];
	let sum = 0;
	while (sum < 2) {
		indexStyle = Math.floor(Math.random() * styleGroup.length);
		indexSize = Math.floor(Math.random() * sizeGroup.length);
		indexRotation = Math.floor(Math.random() * rotationGroup.length);
		indexInclination = Math.floor(Math.random() * inclinationGroup.length);
		sum = (indexStyle !== 0) + (indexSize !== 0) + (indexRotation !== 0) + (indexInclination !== 0);
	}
	let classList = 'letter ';
	classList += styleGroup[indexStyle] + sizeGroup[indexSize] + rotationGroup[indexRotation] + inclinationGroup[indexInclination];
	return classList;
}

// Coloca todas as palavras no paragrafo, retirando whiteSpaces
function setSpans(pBlock, arrayText) {
	for (index = 0; index < arrayText.length; index += 1) {
		if (arrayText[index] !== ''){
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
	const spans = document.querySelectorAll('.letter');
	document.querySelector('#carta-contador').innerHTML = spans.length;
}

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
});

document.addEventListener('click', (event) => {
	if (event.target.classList.contains('letter')) {
		console.log(event.target.classList);
		event.target.classList = generateRandomClass();
		console.log(event.target.classList);
	}
});