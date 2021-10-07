const button = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const paragraphText = document.querySelector('#carta-gerada');

function letter() {
  paragraphText.innerHTML = '';
  if (inputText.value === 0 || inputText.value.trim() === '') {
    paragraphText.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const splitWords = inputText.value.split(' ').filter((word) => word !== '');
    splitWords.forEach((word) => {
      const createSpan = document.createElement('span');
      createSpan.innerText = word;
      paragraphText.append(createSpan);
    });
  }
}

button.addEventListener('click', letter);
