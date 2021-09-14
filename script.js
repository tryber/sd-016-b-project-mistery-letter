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

// Coloca todas as palavras no paragrafo, retirando whiteSpaces
function setSpans(pBlock, arrayText) {
	for (index = 0; index < arrayText.length; index += 1) {
		if (arrayText[index] !== ''){
			pBlock.append(newChild('span', arrayText[index], '', ''));
		}
	}
}

// Deleta todos os spans previamente existentes
function deleteSpan(pBlock) {
  while (pBlock.firstChild) {
    pBlock.removeChild(pBlock.firstChild);
  }
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
		setSpans (pBlock, arrayText);
	}
});
