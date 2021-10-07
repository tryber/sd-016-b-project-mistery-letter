const button = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const paragraphText = document.querySelector('#carta-gerada');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function randomGroup(group) {
  const position = Math.ceil(Math.random() * group.length) - 1;
  return group[position];
}
// Math.ceil - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
// https://www.w3bai.com/pt/jsref/jsref_ceil.html

function addClassGroup(span) {
  span.classList.add(randomGroup(style));
  span.classList.add(randomGroup(size));
  span.classList.add(randomGroup(rotate));
  span.classList.add(randomGroup(skew));
}

function letter() {
  paragraphText.innerHTML = '';
  if (inputText.value === 0 || inputText.value.trim() === '') {
    paragraphText.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const splitWords = inputText.value.split(' ').filter((word) => word !== '');
    splitWords.forEach((word) => {
      const createSpan = document.createElement('span');
      createSpan.innerText = word;
      addClassGroup(createSpan);
      paragraphText.append(createSpan);
    });
  }
}

button.addEventListener('click', letter);

// * Trim -Para verificar se o value de um input está vazio ou com vários espaços em branco.
// https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim.
