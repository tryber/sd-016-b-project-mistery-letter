const button = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const paragraphText = document.querySelector('#carta-gerada');

function letter() {
  const splitWords = inputText.value.split(' ');
  if (paragraphText.innerHTML === '') {
    for (let index = 0; index < splitWords.length; index += 1) {
      paragraphText.innerHTML += `<span>${splitWords[index]}</span> `;
    }
  } else {
    paragraphText.innerHTML = '';
    letter();
  }
}

button.addEventListener('click', letter);
